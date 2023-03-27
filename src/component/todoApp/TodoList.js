import { Card } from "antd";
import React from "react";
import deletelist from "./deletelist";
 import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const TodoList = ({ myItem, setItem, setId, updateValue }) => {

    return (
        <>
            {myItem.length ? myItem.map((value, index) => {
                return <Card key={index}>
                    <p>{value}</p>
                    <EditOutlined onClick={()=>{
                        setId(index);
                        updateValue(value);
                    }}/>
                    <DeleteOutlined onClick={() => deletelist(index, myItem, setItem)}/>
                </Card>

            }) : <p>No Task</p>
            }


        </>
    )

}
export default TodoList