let button = document.getElementById("btn") ;
// click , doubleClick - dblclick , 
button.addEventListener("dblclick" , () => {
    alert("I was clicked !!!")
    let text = document.querySelector(".box");
    if (text.innerText == "I am batman !") {
        text.innerText = "I am cool !" ;
    }
    else {
        text.innerText = "I am batman !" ; 
    }
})

button.addEventListener("contextmenu" ,() => {
    alert("Don't hack us by Right click !") ;
})
document.addEventListener("keydown" ,(e) => {
    console.log(e.key,e.keyCode) ;
})