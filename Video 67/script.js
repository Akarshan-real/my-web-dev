console.log("Hello World") ;

console.log(document.body) ;

console.log(document.body.childNodes);

console.log(document.body.childNodes[0]);
console.log(document.body.childNodes[1].childNodes);

let cont = document.body.childNodes[1] ;
console.log(cont) ;
console.log(cont.firstChild) ; // first or last

console.log(cont.firstElementChild) ; // first or last
console.log(cont.lastElementChild.parentElement) ;

cont.firstElementChild.style.color = "red" ;


console.log(document.body.firstElementChild.children[3].nextElementSibling); // next or previous