let tittle=document.querySelector(".tittle");
let ul=document.querySelector("ul");
let btn=document.querySelector(".btn");

window.onload=function(){
    if(window.navigator.onLine){
        online();
    
    }
    else{
        offline();
    }
}
window.ononline=function(){
    online();

};
window.onoffline=function(){
    offline();
}
btn.onclick=function(){
    window.location.reload();
}






function online(){
    tittle.innerHTML="online now";
    tittle.style.color="yellow";
    ul.classList.add("hide");
    btn.classList.add("hide");
}
function offline(){
    tittle.innerHTML="offline now";
    tittle.style.color="brown";
    ul.classList.remove("hide");
    btn.classList.remove("hide");
}