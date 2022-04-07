
import "./index.css"
const root=document.getElementById("root");
const input=document.querySelector(".in");
const button=document.querySelector(".btn");
const h2=document.createElement("h2");
button.addEventListener("click",()=>{
    const text=input.value;
    h2.textContent=text;
    root.append(h2);
});
h2.classList.add("font");
