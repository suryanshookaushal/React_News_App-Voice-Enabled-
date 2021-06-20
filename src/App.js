import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useEffect } from 'react';

const alnkey = '46a5ee86833a8e64056a2354057760162e956eca572e1d8b807a3e2338fdd0dc/stage'

const App = ()=>{

  useEffect(()=>{
    alanBtn({
      key: alnkey
    })
  },[])

  return (
    <div className="App">
      <h1>Alan enabled AI App</h1>
    </div>
  );
}

export default App;
