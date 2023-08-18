function changeDirection(){
    if(document.getElementById("allBox").style.flexDirection!=="column"){
        document.getElementById("allBox").style.flexDirection="column"
        document.getElementById("allBox").style.alignItems="center"
    }
    else{
        document.getElementById("allBox").style.flexDirection="row";
    }
}
let text=document.getElementById("text");
let heading=document.getElementsByTagName("h1");
let box=document.getElementsByClassName("box");

document.getElementById("replaceText").addEventListener("click",()=>{
    document.querySelector(".heading1").innerText="Welcome to Elevated academy"
})
document.getElementById("changesInText").addEventListener("click",()=>{
    document.querySelector(".heading1").innerText="Hello World"
})

function setTimeInBox(){
    let date=new Date();
    if(date.getHours()>12){
        box[0].innerText=date.getHours()-12;
    }
    else{ 
        box[0].innerText=date.getHours();
    }
    box[1].innerText=date.getMinutes();
    box[2].innerText=date.getSeconds();
}
setInterval(setTimeInBox,1000)
