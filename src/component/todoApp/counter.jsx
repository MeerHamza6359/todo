import React from "react"
import { useState } from 'react';
import { Button } from 'antd';


const MyCounter = () => {

    const [counter, setCounter] = useState(0)

    const handleClick1 = () => {
        setCounter(counter + 1)
    }

    return (
        <div>
            {counter}
            < Button onClick={handleClick1} > Increment</Button >
        </div >
    )
}

export default MyCounter