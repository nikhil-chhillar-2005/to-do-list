let input =document.querySelector("input");
let licontainer=document.querySelector(".task");

function addtask(){
    if(input.value===""){
        alert("enter some text");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        licontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    input.value="";
    savedata();
}
licontainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }

    
});
function savedata(){
    localStorage.setItem("data",licontainer.innerHTML);
}
function showtask(){
    licontainer.innerHTML=localStorage.getItem("data");
}
document.addEventListener('keypress',(e)=>{
    console.log(e);
    if(e.key=="Enter"){
        addtask();
    }
})
showtask();