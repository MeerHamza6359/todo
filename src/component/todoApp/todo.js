import { useEffect , useState, useCallback } from 'react';
import '../style/App.css';
import { Input, Button} from 'antd';
import TodoList from './TodoList';
import { Link } from 'react-router-dom';

// export const UserContext = createContext()

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


  const updateValue = useCallback (() => {
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
  }, [Item, Inputs])

 

  return (
    < >
      <Input value={Inputs} onChange={(e) => { setInput(e.target.value) }} />
      <Link to={"/counter"}>
      <Button disabled={disable}>{Id === 0 || Id > 0 ? "Update" : "ADD"}</Button>
      </Link>
      <TodoList Item={Item} setItem={setItem} setId={setId}/>
    </>
  );

}

export default App;