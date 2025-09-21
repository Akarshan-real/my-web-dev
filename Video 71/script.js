// run in web
console.log("document.querySelector(.container).innerHTML") ;
console.log(document.querySelector(".container").innerHTML) ;

console.log("document.querySelector(.container).outerHTML");
console.log(document.querySelector(".container").outerHTML) ;

console.log("document.querySelector(.container).tagName");
console.log(document.querySelector(".container").tagName) ;

console.log("document.querySelector(.container).nodeName");
console.log(document.querySelector(".container").nodeName) ; // for text / comment node also

console.log("document.querySelector(.container).textContent");
console.log(document.querySelector(".container").textContent) ;

console.log("document.querySelector(.container).innerText");
console.log(document.querySelector(".container").innerText) ;

console.log("document.querySelector(.box).innerHTML");
console.log(document.querySelector(".box").innerHTML) ;

// console.log(document.querySelector(".container").hidden = true) ;

console.log(document.querySelector(".box").innerHTML = "Hey i am akarshan") ;

console.log("document.querySelector(.box).hasAttribute(style) or getAttribute(style) OR setAttribute(style,display:inline) or remoteAttribute(style)" ) ;
console.log(document.querySelector(".box").hasAttribute("style")) ;
console.log(document.querySelector(".box").getAttribute("style")) ;
console.log(document.querySelector(".box").setAttribute("style","display:inline")) ;
console.log(document.querySelector(".box").removeAttribute("style")) ;

console.log("document.designMode = on)")
console.log(document.designMode = "on") ;

console.log("document.querySelector(.box).dataset");
console.log(document.querySelector(".box").dataset);


// let div = document.createElement("div") ;
// div.className = "alert" ; 
// div.innerHTML = "<span>I have been coding for 6 months <b>From harry</b></span>" ;
// // div.setAttribute("class","created") ;
// document.querySelector(".container").append(div) ;
// // append - last , prepend - first
// document.querySelector(".container").before(div) ;
// document.querySelector(".container").after(div) ;
// document.querySelector(".container").replaceWith(div) ;

let cont = document.querySelector(".container") ;
// cont.insertAdjacentHTML("afterend","<i> I am under the water , please help me , here too much raining.....</i>") ;
// cont.insertAdjacentHTML("afterbegin","<i> I am under the water , please help me , here too much raining.....</i>") ;
// cont.insertAdjacentHTML("beforebegin","<i> I am under the water , please help me , here too much raining.....</i>") ;
cont.insertAdjacentHTML("beforeend","<i> I am under the water , please help me , here too much raining.....</i>") ;

// document.querySelector(".box").remove() ;

console.log("document.getElementsByClassName(container)[0].classList") ;
console.log(document.getElementsByClassName("container")[0].classList) ;

console.log("document.getElementsByClassName(container)[0].className") ;
console.log(document.getElementsByClassName("container")[0].className) ;

console.log("document.getElementsByClassName(container)[0].classList.add(harry) or remove(harry) or toggle(opposite of current add or removal of class)") ;
document.getElementsByClassName("container")[0].classList.add("harry") ;
document.getElementsByClassName("container")[0].classList.remove("harry") ;
document.getElementsByClassName("container")[0].classList.toggle("harry") ;
