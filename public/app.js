const $ = id => document.getElementById(id);
const esc = text => String(text).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const groups = [...new Set(COURSE.map(lesson => lesson.group))];
let storage=null;
try { storage=window.localStorage; } catch {}
const profileStore=new Profiles.Store(storage,COURSE.length);
let saved=profileStore.state(),current=saved.last,worker=null,timer=null,busy=false;
function saveStatus(){
  $('saveStatus').textContent=profileStore.error?'Not saved — export a backup':'Saved on this device';
  $('saveStatus').title=profileStore.error||'This profile saves automatically in this browser.';
  $('profileButton').textContent=profileStore.current().name+' · Profiles';
}
function persist(){saved.last=current;profileStore.save(saved);saveStatus();}
function progress(){
 const complete=Object.keys(saved.passed).filter(key=>saved.passed[key]&&COURSE[Number(key)]).length;
 $('progressText').textContent=`${complete} / ${COURSE.length}`;$('progress').value=complete/COURSE.length*100;
}
function nav(){
 progress();
 $('nav').innerHTML=groups.map(group=>`<details class="nav-group" ${COURSE[current].group===group?'open':''}><summary>${esc(group)}</summary>${COURSE.filter(lesson=>lesson.group===group).map(lesson=>`<button class="nav-item ${lesson.id===current?'active':''} ${saved.passed[lesson.id]?'done':''}" data-lesson="${lesson.id}" ${lesson.id===current?'aria-current="step"':''}><span class="nav-num">${saved.passed[lesson.id]?'✓':lesson.id+1}</span><span>${esc(lesson.title)}</span></button>`).join('')}</details>`).join('');
 $('nav').querySelectorAll('[data-lesson]').forEach(button=>button.onclick=()=>select(Number(button.dataset.lesson)));
}
function renderChecks(results=[]){
 const lesson=COURSE[current];
 $('tests').innerHTML=lesson.tests.map((test,index)=>`<div class="test ${results[index]?(results[index].passed?'pass':'fail'):''}"><span class="symbol">${results[index]?(results[index].passed?'✓':'×'):'○'}</span><span>${esc(test.label)}${results[index]?.detail?`<small>${esc(results[index].detail)}</small>`:''}</span></div>`).join('');
 $('checkCount').textContent=results.length?`${results.filter(result=>result.passed).length}/${lesson.tests.length}`:'';
}
function updateLines(){$('lines').textContent=Array.from({length:$('editor').value.split('\n').length},(_,index)=>index+1).join('\n');}
function showLesson(){
 const lesson=COURSE[current];nav();$('eyebrow').textContent='';$('title').textContent=lesson.title;$('intro').textContent=lesson.intro;$('explanation').innerHTML=lesson.body;$('example').textContent=lesson.example;$('task').textContent=lesson.task;$('hint').textContent=lesson.hint;$('answer').textContent=lesson.answer;$('editor').value=saved.drafts[current]??lesson.starter;$('stdin').value=saved.inputs[current]??lesson.inputs;$('solution').open=false;
 $('badge').textContent=saved.passed[current]?'✓ Done':'';$('badge').className='badge'+(saved.passed[current]?' complete':'');$('output').textContent='Run your code to see the result.';$('feedback').textContent='Complete every check to finish this lesson.';$('feedback').className='';$('runtime').textContent='';$('position').textContent=`${current+1} / ${COURSE.length}`;$('prev').disabled=current===0;$('next').disabled=current===COURSE.length-1;updateLines();renderChecks();
}
function stop(message){if(worker)worker.terminate();worker=null;clearTimeout(timer);busy=false;$('run').disabled=false;$('check').disabled=false;$('stop').hidden=true;$('runtime').textContent='';if(message!==undefined)$('output').textContent=message;}
function select(id){if(!Number.isInteger(id)||!COURSE[id])return;saveDraft();stop();current=id;persist();showLesson();$('sidebar').classList.remove('open');$('menu').setAttribute('aria-expanded','false');window.scrollTo({top:0,behavior:'smooth'});}
function markDraftChanged(){stop();delete saved.passed[current];persist();nav();$('badge').textContent='';$('badge').className='badge';renderChecks();$('feedback').textContent='Run your code, then check it.';$('feedback').className='';}
function saveDraft(){if($('editor'))saved.drafts[current]=$('editor').value;if($('stdin'))saved.inputs[current]=$('stdin').value;}
function run(check=false){
 if(busy)return;saveDraft();persist();const lesson=COURSE[current];busy=true;$('run').disabled=true;$('check').disabled=true;$('stop').hidden=false;$('runtime').textContent='Loading Python…';$('output').textContent='Starting Python…';
 if(check){delete saved.passed[current];persist();nav();$('badge').textContent='';$('badge').className='badge';renderChecks();}
 worker=new Worker('worker.js',{type:'module'});
 timer=setTimeout(()=>stop('Python took too long to load. Check your connection and try again.'),60000);
 worker.onmessage=({data})=>{
  if(data.type==='ready'){clearTimeout(timer);$('runtime').textContent='Running';$('output').textContent='Running your code…';timer=setTimeout(()=>stop('Stopped after five seconds. Check whether a loop needs a stopping condition.'),5000);return;}
  if(data.type==='failure'){stop('Python could not start. Check your connection and try again.');console.warn(data.message);return;}
  if(data.type==='result'){
   stop();const result=data.data;$('output').textContent=(result.output||'')+(result.error?'\n'+friendlyError(result.error)+'\n\n'+result.error:(!result.output?'Your code ran. Add print() to show a value.':''));
   if(check){renderChecks(result.results);const passed=!result.error&&result.results.length===lesson.tests.length&&result.results.every(test=>test.passed);
    if(passed){saved.passed[current]=true;persist();nav();$('badge').textContent='✓ Done';$('badge').className='badge complete';$('feedback').textContent='All checks passed.';$('feedback').className='success';}
    else{$('feedback').textContent=result.error?'Fix the error, then check again.':'Review the checks and try again.';$('feedback').className='';}
   }
  }
 };
 worker.onerror=()=>stop('Python could not start. Try again.');
 worker.postMessage({code:$('editor').value,inputs:check?lesson.inputs:$('stdin').value,tests:check?lesson.tests:[]});
}
function friendlyError(error){if(error.includes('IndentationError'))return'Check the indentation inside your block.';if(error.includes('SyntaxError'))return'Check your quotes, brackets, and colons.';if(error.includes('NameError'))return'Check that the name is spelled correctly and assigned first.';if(error.includes('TypeError'))return'Check that these values have compatible types.';if(error.includes('EOFError'))return'Add each requested answer under Program input.';return'Read the last line, then check the line number above it.';}
function replaceCode(code){stop();$('editor').value=code;saveDraft();markDraftChanged();updateLines();$('editor').focus();}
function openProfiles(){
  saveDraft();persist();renderProfiles();$('profileMessage').textContent=profileStore.error;
  $('profileDialog').showModal();
}
function renderProfiles(){
  $('profileList').innerHTML=profileStore.list().map(p=>`<button type="button" class="profile-choice ${p.id===profileStore.activeId?'selected':''}" data-profile="${esc(p.id)}">${esc(p.name)}${p.id===profileStore.activeId?' <span>Current</span>':''}</button>`).join('');
  $('profileList').querySelectorAll('[data-profile]').forEach(button=>button.onclick=()=>{
    saveDraft();persist();stop();saved=profileStore.switchTo(button.dataset.profile);current=saved.last;
    showLesson();saveStatus();$('profileDialog').close();
  });
}
function downloadBackup(){
  saveDraft();persist();const blob=new Blob([profileStore.exportData()],{type:'application/json'});
  const url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;
  link.download='python-'+profileStore.current().name.replace(/[^a-z0-9_-]/gi,'-')+'-progress.json';
  document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
  $('profileMessage').textContent='Backup downloaded.';
}
$('editor').addEventListener('input',()=>{saveDraft();markDraftChanged();updateLines();});$('editor').addEventListener('scroll',()=>$('lines').scrollTop=$('editor').scrollTop);
$('editor').addEventListener('keydown',event=>{if(event.key==='Tab'){event.preventDefault();const target=event.target,start=target.selectionStart,end=target.selectionEnd;target.setRangeText('    ',start,end,'end');target.dispatchEvent(new Event('input'));}if(event.key==='Enter'&&(event.ctrlKey||event.metaKey)){event.preventDefault();run(false);}});
$('run').onclick=()=>run(false);$('check').onclick=()=>run(true);$('stop').onclick=()=>stop('Stopped.');$('prev').onclick=()=>select(current-1);$('next').onclick=()=>select(current+1);
$('reset').onclick=()=>{if(confirm('Reset this lesson’s code?'))replaceCode(COURSE[current].starter);};$('tryExample').onclick=()=>{if($('editor').value===COURSE[current].starter||confirm('Replace your code with the example?'))replaceCode(COURSE[current].example);};$('loadAnswer').onclick=()=>{if(confirm('Replace your code with the solution?'))replaceCode(COURSE[current].answer);};
$('menu').onclick=()=>{const open=$('sidebar').classList.toggle('open');$('menu').setAttribute('aria-expanded',String(open));};
$('profileButton').onclick=openProfiles;
$('closeProfiles').onclick=()=>$('profileDialog').close();
$('profileForm').onsubmit=event=>{
  event.preventDefault();saveDraft();persist();
  try{const nextState=profileStore.create($('profileName').value);stop();saved=nextState;current=saved.last;
    $('profileName').value='';showLesson();saveStatus();$('profileDialog').close();
  }catch(error){$('profileMessage').textContent=error.message;}
};
$('exportProfile').onclick=downloadBackup;
$('importProfile').onclick=()=>$('backupFile').click();
$('backupFile').onchange=async event=>{
  const file=event.target.files[0];if(!file)return;
  try{if(file.size>3000000)throw Error('Choose a backup smaller than 3 MB.');
    const text=await file.text();saveDraft();persist();const nextState=profileStore.importData(text);
    stop();saved=nextState;current=saved.last;showLesson();saveStatus();renderProfiles();
    $('profileMessage').textContent='Imported as '+profileStore.current().name+'.';
  }catch(error){$('profileMessage').textContent=error.message;}
  event.target.value='';
};
$('stdin').addEventListener('input',()=>{saved.inputs[current]=$('stdin').value;persist();});
window.addEventListener('pagehide',()=>{saveDraft();persist();});
showLesson();saveStatus();
if(document.modelContext?.registerTool){try{const controller=new AbortController();document.modelContext.registerTool({name:'open_python_lesson',title:'Open Python lesson',description:'Open one lesson by number and save the current draft.',inputSchema:{type:'object',properties:{lessonId:{type:'integer',minimum:0,maximum:COURSE.length-1}},required:['lessonId'],additionalProperties:false},annotations:{readOnlyHint:false},execute:({lessonId})=>{select(lessonId);return{lessonId:current,title:COURSE[current].title};}},{signal:controller.signal});window.addEventListener('pagehide',()=>controller.abort(),{once:true});}catch{}}
