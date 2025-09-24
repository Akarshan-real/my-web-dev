function displayText(x,ms) {
    return new Promise((resolve,reject) => {
        setTimeout(() => { 
            resolve(x.style.display = "block") ;
        }, ms);
    }) ;
}
async function turnText(x) {
    setTimeout(() => {
        x[0].style.display = "block" ;
        document.getElementById("heading").style.display = "block" ;
    }, 200);
    for (let i = 1; i < x.length; i++) {
        await displayText(x[i],1300) ;
    } ;
}
turnText(document.querySelectorAll(".text")) ;


function blinking(x,s,ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(x.forEach(e => e.innerHTML = s)) ;
        }, ms) ;
    }) ;
}
async function blinkingDots(x) {
    const array = [".","..","...",""] ; 
    let i = 0 ; 
    while (true) {
        await blinking(x,array[i],600) ;
        i = (i+1) % array.length ;
    };
}
blinkingDots(document.querySelectorAll(".dots"));


document.getElementById("refresh").addEventListener("click",() => {
    window.location.reload() ;
})