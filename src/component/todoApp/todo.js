import { useRef } from 'react';
// import logo from '../style/logo.svg';
import '../style/App.css';

const App = () => {

  
    const myvalue = useRef()


    
  const getValue = () => {
    console.log(">");
    console.log(">>>>", myvalue.current.value);
  }
  return (
    <div>
      <input id='input-1' ref={myvalue} />
      <button onClick={getValue}>CLick</button>
      
    </div>
  );
}

export default App;
