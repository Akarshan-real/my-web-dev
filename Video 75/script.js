console.log("Akarshan is hacker");
console.log("Arya is hecker");

setTimeout(() => {
    console.log("I am inside setTimeOUt");
}, 3000);
setTimeout(() => {
    console.log("I am inside setTimeOUt second");
}, 3000);

console.log("The End");

function fn() {
    console.log("Nothing...") ;
}
function callback(string,fn) {
    console.log(string);
    fn();
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Harry",fn);
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback) ;
