console.log("Hey");

function greetings(name) {
    console.log("Hello there fellow " + name);
}

function sum(a, b) {
    // console.log(a+b) ;
    return a + b;
}

console.log("The sum of 2 and 3 is " + sum(2, 3));


const func = (x) => {
    console.log("I am an arrow function", x);
}

func(8);