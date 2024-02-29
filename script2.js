

//2-1Challenge
let redButton = document.getElementById("btn1");
let greenButton = document.getElementById("btn2");
//let body = document.querySelector("body")

redButton.addEventListener("click",function(){
    document.querySelector("body").style.backgroundColor = "red";
})
greenButton.addEventListener("click",function(){

    document.querySelector("body").style.backgroundColor = "green";
})

//body.addEventListener("click",function(){
  //  document.querySelector("body").style.backgroundColor = "aquamarine";
//})