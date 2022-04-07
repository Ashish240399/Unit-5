
import "./index.css"
const root=document.getElementById("root");
const input=document.querySelector(".in");
const button=document.querySelector(".btn");
const img1=document.createElement("img");
const logo=document.querySelector(".logo");
img1.src="https://images.unsplash.com/photo-1551150441-3f3828204ef0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
const h2=document.createElement("h2");
button.addEventListener("click",()=>{
    const text=input.value;
    h2.textContent=text;
    root.append(h2);
});
h2.classList.add("font");
logo.append(img1);