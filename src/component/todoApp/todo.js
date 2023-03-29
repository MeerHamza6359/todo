import { useState } from 'react';
import '../style/App.css';
import { Input, Button } from 'antd';
import TodoList from './TodoList';
import { useEffect } from 'react';
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
  const [Inputs, setInput] = useState("")
  const [Id, setId] = useState(null)
  const [disable, setDisable] = useState(false)


  useEffect(() => {
    if (Item.length) {
      let result = Item.filter((text, index) => {
        return text === Inputs
      })
      if (result.length){
        setDisable(true)
      }
      else {
        setDisable(false)
      }
    }
  }, [Inputs])


  const updateValue = () => {
    if (Id === 0 || Id > 0) {
      Item[Id] = Inputs
      setItem([...Item])
      setId(null)
      setInput("")
    }
    else {
      setItem([...Item, Inputs])
      setInput("")
    }
  }

  return (
    <>
      <Input value={Inputs} onChange={(e) => { setInput(e.target.value) }} />
      <Button disabled={disable} onClick={updateValue}>{Id === 0 || Id > 0 ? "Update" : "ADD"}</Button>
      <TodoList myItem={Item} setItem={setItem} setId={setId} setInput={setInput} updateValue={((e) => setInput(e))} />

    </>
  );

}

export default App;


