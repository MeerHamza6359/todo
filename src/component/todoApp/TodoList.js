import { Card } from "antd";
import React from "react";



const TodoList = ({ myItem }) => {
    return (
        <>
            { myItem.length ? myItem.map((value, index) => {
                return <Card key={index}>
                    <p>My name is {value}</p>
                </Card>

            }): <p>No Task</p>
            }

        </>
    )

}
export default TodoList