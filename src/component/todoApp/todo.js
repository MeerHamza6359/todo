import { useRef, useState } from 'react';
import logo from '../style/logo.svg';
import '../style/App.css';
import { Card, Input, Button } from 'antd';

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
  const [value, setValue] = useState("")

  const getItems = () => {
    setItem([...Item, value])
    setValue("")
  }

  return (
    <>
      <Input value={value} onChange={(e) => { setValue(e.target.value) }}></Input>
      <Button onClick={getItems}>Click Me!</Button>
      {Item.map((value,index)=>{
        return <Card key={index}>
           <p>My name is {value}</p>
      </Card>
     
      })
    }
    </>
  )

}

export default App;


