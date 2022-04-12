import "./Todoitem.css"
function Todoitem({el,statusHandle}){
    return (
        <div className="Todoitem">
            <div id="container">
                <span className="title">{el.title}</span>
                <span className="id">id:{el.id}</span>
                <span className="status">{el.status===false? "Not Done":"Done"}</span>
                <button onClick={()=>{
                    statusHandle(el.id)
                }}>Tuggle</button>
            </div>
        </div>
    )
}
export {Todoitem}