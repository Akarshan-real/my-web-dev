console.log("LESH GOOOOOOOOOOOOOOOOOOOOOOOO") ;

let worldChampion = document.getElementsByClassName("box") ;
console.log(worldChampion) ;

// worldChampion[2].style.fontSize = "larger" ;

// document.getElementById("two.5").style.fontSize = "2.5rem" ;

// document.querySelector(".box").style.backgroundColor = "green" ;

console.log(document.querySelectorAll(".box")) ;

document.querySelectorAll(".box").forEach (e => {
    e.style.backgroundColor = "green" ;
});

console.log(document.getElementsByTagName("div")) ;

console.log(worldChampion[2].matches("#two\\.5")) ;
console.log(worldChampion[2].closest("html")) ;

console.log(document.querySelector(".container").contains(worldChampion[1])) ;
   