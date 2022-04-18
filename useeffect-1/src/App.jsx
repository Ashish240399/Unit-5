import { useState } from "react";
import "./App.css";
import { Counter } from "./components/counter";


function App() {

  const[show,setShow]=useState(true)
  

  return (
    <div className="App">
      
      {/* {show? <Todos/>:null} */}
      {show?<Counter/>:null}
      <button onClick={()=>{
        setShow(!show)
      }}>{show?"hide":"Show"}counter</button>
    </div>
  );
}

export default App;