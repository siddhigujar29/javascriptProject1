const box=document.getElementById("input-box");
const con=document.getElementById("list-container");
function addTask(){
    if(box.value===''){
        alert("you must be write something!!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=box.value;
        con.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    box.value="";
    saveData();
}

con.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",con.innerHTML);
}
function showTask(){
    con.innerHTML=localStorage.getItem("data")
}

showTask();








