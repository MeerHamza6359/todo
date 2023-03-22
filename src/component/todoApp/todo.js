import { useRef, useState } from 'react';
// import logo from '../style/logo.svg';
import '../style/App.css';
import { Input, Button } from 'antd';
import TodoList from './TodoList';
function App() {

  //     const myvalue = useRef()

  //   const getValue = () => {
  //     console.log(">");
  //     console.log(">>>>", myvalue.current.value);
  //   }
  //   return (
  //     <div>
  //       <input id='input-1' ref={myvalue} />
  //       <button onClick={getValue}>CLick</button>
  //     </div>
  //   );
  // }

  const [Item, setItem] = useState([])
  const myinput = useRef()

  const getItems = () => {
    setItem([myinput.current.input.value, ...Item])
    
  }

  return (
    <>
      <Input ref={myinput} />
      <Button onClick={getItems}>Click Me!</Button>
      <TodoList myItem={Item}/>
      </>
      );

}

      export default App;


