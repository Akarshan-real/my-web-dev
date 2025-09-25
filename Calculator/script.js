
let display = document.querySelector('.display');
let blinking = setInterval(() => {
    if (display.innerText === "|") {
        display.innerText = "";
    }
    else {
        display.innerText = "|";
    }
}, 700);

let calculationArray = [];
const butt = document.querySelectorAll(".buttons");

let storing = "";
let lastNumber = "";

function parseNumber(x) {
    return x.includes(".") ? parseFloat(x) : parseInt(x);
}

function displaySize(x) {
    let str = String(x);
    if (str.length > 15) {
        display.style.fontSize = "2.5rem";
    }
    else if (str.length > 10) {
        display.style.fontSize = "2rem";
    }
    else if (str.length > 6) {
        display.style.fontSize = "1.5rem";
    }
    return parseNumber(str);
}

butt.forEach((b) => {
    b.addEventListener("click", () => {



        let id = b.id;

        let content = document.getElementById(id).innerText;
        console.log(b, id);

        if (id === "equals") {

            if (lastNumber === "") {
                return;
            }
            else {
                clearInterval(blinking);
                display.innerText = "";

                calculationArray.push(storing);
                calculating(calculationArray);

                if (isNaN(calculationArray[0])) {
                    display.innerText = lastNumber;
                }
                else {
                    display.innerText = displaySize(calculationArray[0]);
                }
                let span = document.createElement("span") ;
                span.innerText = "|" ;
                span.style.width = "10px" ;
                span.style.transform = "translateX(-20px)"
                display.appendChild(span);
                setInterval(() => {
                    if (span.innerText.endsWith("|")){
                        span.innerText = " " ;
                    }
                    else {
                        span.innerText = "|" ;
                    }
                }, 700);

                lastNumber = calculating(calculationArray);
                storing = "";
                calculationArray = [];
                return;
            }
        }

        if (id === "addition") {
            calculationArray.push(storing);
            lastNumber = storing;
            storing = "";
            display.innerText = "+" ;

            calculationArray.push(content);
        }
        else if (id === "subtraction") {
            calculationArray.push(storing);
            lastNumber = storing;
            storing = "";
            display.innerText = "-" ;

            calculationArray.push(content);
        }
        else if (id === "multiply") {
            calculationArray.push(storing);
            lastNumber = storing;
            storing = "";
            display.innerText = "x" ;

            calculationArray.push("*");
        }
        else if (id === "divide") {
            calculationArray.push(storing);
            lastNumber = storing;
            storing = "";
            display.innerText = "/" ;

            calculationArray.push(content);
        }
        else {
            clearInterval(blinking);
            storing = storing + content;
            display.innerText = storing ;
            console.log(calculationArray);
        }


    })

    function calculating(array) {
        if (array == "") {
            return 0;
        }
        let a = 0;
        let b = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] === "*" && i != 0 && i != array.length - 1) {
                a = parseNumber(array[i - 1]);
                b = parseNumber(array[i + 1]);

                array.splice(i - 1, 3, mul(a, b));
            }
            else if (array[i] === "/" && i != 0 && i != array.length - 1) {
                a = parseNumber(array[i - 1]);
                b = parseNumber(array[i + 1]);

                try {
                    array.splice(i - 1, 3, div(a, b));
                }
                catch (error) {
                    display.style.fontSize = "1.3rem" ;
                    display.innerText = error;
                    break;
                }
            }
            else if (array[i] === "+" && i != 0 && i != array.length - 1) {
                a = parseNumber(array[i - 1]);
                b = parseNumber(array[i + 1]);

                array.splice(i - 1, 3, add(a, b));
            }
            else if (array[i] === "-" && i != 0 && i != array.length - 1) {
                a = parseNumber(array[i - 1]);
                b = parseNumber(array[i + 1]);

                array.splice(i - 1, 3, sub(a, b));
            }
        }

    }

    function add(...arr) {
        return arr.reduce((a, b) => {
            return a + b;
        })
    }
    function sub(...arr) {
        return arr.reduce((a, b) => {
            return a - b;
        })
    }
    function mul(...arr) {
        return arr.reduce((a, b) => {
            return a * b;
        })
    }
    function div(...arr) {
        return arr.reduce((a, b) => {
            if (a == 0 || b == 0) {
                throw "ZeroDivisionError";
            }
            else {
                return a / b;
            }
        })
    }
})

document.getElementById("refresh").addEventListener("click",()=>{
    window.location.reload();
})