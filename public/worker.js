import { loadPyodide } from 'https://cdn.jsdelivr.net/pyodide/v0.27.7/full/pyodide.mjs';
self.onmessage = async ({data}) => {
  try {
    const py = await loadPyodide({indexURL:'https://cdn.jsdelivr.net/pyodide/v0.27.7/full/'});
    const response = await fetch('runner.py');
    if (!response.ok) throw new Error('The exercise runner could not be loaded. Please try again.');
    await py.runPythonAsync(await response.text());
    self.postMessage({type:'ready'});
    py.globals.set('payload_json',JSON.stringify(data));
    const result = await py.runPythonAsync('execute_lesson(json.loads(payload_json))');
    self.postMessage({type:'result',data:JSON.parse(result)});
  } catch(error) {
    self.postMessage({type:'failure',message:String(error)});
  }
};
