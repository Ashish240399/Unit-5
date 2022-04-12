import { useState } from "react";
import "./Todoinput.css"
function Todoinput({getData}){
    const [list,setList]=useState("");
    return(
        <div>
            <input onChange={(e)=>{
                setList(e.target.value)
            }} type="text" placeholder="Add Your Todo"></input>
            <button className="plus" onClick={()=>{
                getData(list);
            }}>+</button>
        </div>
    )
}
export{Todoinput}