import { Card } from "antd";
import React from "react";
 import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const TodoList = ({ myItem, setItem}) => {

    const deletelist =(index)=>{
        let filterlists = myItem.filter((val, ind)=>{
            return ind !== index
        })
        setItem(filterlists)
    }
   

    return (
        <>
            {myItem.length ? myItem.map((value, index) => {
                return <Card key={index}>
                    <p>{value}</p>
                    <EditOutlined />
                    <DeleteOutlined onClick={() => deletelist(index)}/>
                </Card>

            }) : <p>No Task</p>
            }


        </>
    )

}
export default TodoList