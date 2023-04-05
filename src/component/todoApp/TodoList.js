import { React, memo } from "react";
import deletelist from "./deletelist";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Card } from "antd";

const TodoList = ({Item, setItem, setId}) => {
    console.log("TodoList.js")
    return (
        <>
            {Item.length ? Item.map((value, index) => {
                return <Card key={index}>
                    <p>{value}</p>
                    <EditOutlined onClick={() => {
                        setId(index);
                    }} />
                    <DeleteOutlined onClick={() => deletelist(index, Item, setItem)} />
                </Card>

            }) : <p>No Task</p>}
        </>
    )
}
export default memo(TodoList)