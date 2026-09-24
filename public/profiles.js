/* Named browser profiles. No passwords, remote service, or database. */
const Profiles = (() => {
  const KEY = 'python-course-profiles-small-steps-v1';
  const CURRICULUM = 'small-steps-1';
  const fresh = () => ({drafts:{},inputs:{},passed:{},last:0});
  function cleanState(value, count){
    const clean=fresh();
    if(!value||typeof value!=='object')return clean;
    for(const field of ['drafts','inputs','passed']){
      if(!value[field]||typeof value[field]!=='object'||Array.isArray(value[field]))continue;
      for(const [key,item] of Object.entries(value[field])){
        const id=Number(key);
        if(!Number.isInteger(id)||id<0||id>=count)continue;
        if(field==='passed'){if(item===true)clean.passed[id]=true;}
        else if(typeof item==='string')clean[field][id]=item.slice(0,50000);
      }
    }
    if(Number.isInteger(value.last)&&value.last>=0&&value.last<count)clean.last=value.last;
    return clean;
  }
  class Store {
    constructor(storage,count){
      this.storage=storage;this.count=count;this.error='';this.data={version:1,activeId:'',profiles:[]};
      this.reload();
      if(!this.data.profiles.length){
        let old=null;
        try { old=JSON.parse(storage?.getItem('python-course-profiles-v1')||'null'); } catch {}
        if(old?.version===1 && Array.isArray(old.profiles) && old.profiles.length){
          this.data.profiles=old.profiles.filter(p=>p && typeof p.id==='string' && typeof p.name==='string').map(p=>({id:p.id,name:p.name,state:fresh(),previousCourse:{curriculum:'original-34',state:p.state}}));
          this.data.activeId=old.activeId;
        }
        if(!this.data.profiles.length){
          const p={id:this.id(),name:'Learner',state:fresh()};
          this.data.profiles.push(p);this.data.activeId=p.id;
        }
        this.write();
      }
      this.activeId=this.data.profiles.some(p=>p.id===this.data.activeId)?this.data.activeId:this.data.profiles[0].id;
    }
    id(){return 'p-'+(typeof crypto.randomUUID==='function'?crypto.randomUUID():Array.from(crypto.getRandomValues(new Uint32Array(4)),n=>n.toString(16)).join('-'));}
    reload(){
      if(!this.storage)return;
      try{
        const raw=this.storage.getItem(KEY);if(!raw)return;
        const db=JSON.parse(raw);
        if(db.version!==1||!Array.isArray(db.profiles))throw Error('Unknown save format');
        const used=new Set();const list=[];
        for(const p of db.profiles){
          if(!p||typeof p.id!=='string'||typeof p.name!=='string'||!p.name.trim()||used.has(p.id))continue;
          used.add(p.id);list.push({id:p.id,name:p.name.trim().slice(0,40),state:cleanState(p.state,this.count),...(p.previousCourse?{previousCourse:p.previousCourse}:{})});
        }
        if(!list.length)throw Error('No profiles in save');
        this.data={version:1,activeId:db.activeId,profiles:list};
      }catch{this.error='Could not read browser saves. Export a backup before closing.';}
    }
    write(){
      try{if(!this.storage)throw Error();this.storage.setItem(KEY,JSON.stringify(this.data));this.error='';return true;}
      catch{this.error='Browser saving unavailable. Export a backup before closing.';return false;}
    }
    list(){this.reload();return this.data.profiles.map(p=>({id:p.id,name:p.name}));}
    current(){return this.data.profiles.find(p=>p.id===this.activeId)||this.data.profiles[0];}
    state(){return cleanState(this.current().state,this.count);}
    save(state){
      const prior=this.current();this.reload();let p=this.data.profiles.find(p=>p.id===this.activeId);
      if(!p){p=prior;this.data.profiles.push(p);}
      p.state=cleanState(state,this.count);this.data.activeId=this.activeId;return this.write();
    }
    switchTo(id){
      this.reload();if(!this.data.profiles.some(p=>p.id===id))throw Error('Profile not found.');
      this.activeId=id;this.data.activeId=id;this.write();return this.state();
    }
    create(name,state=fresh(),previousCourse=null){
      this.reload();name=String(name).trim();
      if(!name||name.length>40)throw Error('Use a name between 1 and 40 characters.');
      if(this.data.profiles.some(p=>p.name.toLowerCase()===name.toLowerCase()))throw Error('That name already exists. Choose a different name.');
      const p={id:this.id(),name,state:cleanState(state,this.count),...(previousCourse?{previousCourse}:{})};
      this.data.profiles.push(p);this.activeId=p.id;this.data.activeId=p.id;this.write();return this.state();
    }
    exportData(){return JSON.stringify({format:'python-lessons-profile',version:2,curriculum:CURRICULUM,name:this.current().name,state:this.state(),...(this.current().previousCourse?{previousCourse:this.current().previousCourse}:{})},null,2);}
    importData(text){
      if(typeof text!=='string'||text.length>3000000)throw Error('Choose a profile backup smaller than 3 MB.');
      let file;try{file=JSON.parse(text);}catch{throw Error('This file is not a valid JSON backup.');}
      if(!file||file.format!=='python-lessons-profile'||![1,2].includes(file.version)||typeof file.name!=='string'||!file.name.trim()||!file.state||typeof file.state!=='object'||Array.isArray(file.state)||!file.state.drafts||!file.state.passed)throw Error('Choose a Python lessons profile backup.');
      if(file.version===2 && file.curriculum!==CURRICULUM)throw Error('This backup belongs to a different course edition.');
      this.reload();const base=file.name.trim().slice(0,30);let name=base,n=2;
      while(this.data.profiles.some(p=>p.name.toLowerCase()===name.toLowerCase()))name=`${base} (${n++})`;
      return file.version===1 ? this.create(name,fresh(),{curriculum:'original-34',state:file.state}) : this.create(name,file.state,file.previousCourse);
    }
  }
  return {Store,cleanState,fresh,KEY};
})();
if(typeof module!=='undefined')module.exports=Profiles;
