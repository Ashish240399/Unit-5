import { useState } from "react";
import { Todoinput } from "./Todoinput";
import { Todoitem } from "./Todoitem";
import { nanoid } from 'nanoid'
function Todo(){
    const [todolist,setTodolist]=useState([])
    const getData=(data)=>{
        const totaldata={
            title:data,
            status:false,
            id:nanoid(6)
        }
        setTodolist([...todolist,totaldata])
    }
    const statusHandle=(id)=>{
        setTodolist(todolist.map((e)=>(e.id===id ? {...e,status:!e.status}:e)));
    }
    return (
        <div>
            <Todoinput getData={getData}/>
            {todolist.map((el)=>(
                <Todoitem statusHandle={statusHandle} el={el}/>
            ))}
        </div>
    )
}
export {Todo}