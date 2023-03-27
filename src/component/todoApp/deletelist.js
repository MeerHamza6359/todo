const deletelist =(index, alltodo, setItem)=>{
    let filterlists = alltodo.filter((val, ind)=>{
        return ind !== index
    })
    setItem(filterlists)
}

export default deletelist