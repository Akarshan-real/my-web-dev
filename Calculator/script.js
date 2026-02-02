let display = document.querySelector('.display');
let blinking = setInterval(() => {
    if (display.innerText === "|") {
        display.innerText = "";
    }
    else {
        display.innerText = "|";
    }
}, 700);

function parseNumber(x) {
    return x.includes(".") ? parseFloat(x).toFixed(6) : parseInt(x);
}

let calculationArray = [];
const butt = document.querySelectorAll(".buttons");

let storing = "";
let lastNumber = "";


function displaySize(x,check) {
    let str = String(x);
    if (str.length > 20) {
        display.style.fontSize = "1rem";
    }
    else if (str.length > 15) {
        display.style.fontSize = "1.5rem";
    }
    else if (str.length > 10) {
        display.style.fontSize = "2rem";
    }
    else if (str.length > 6) {
        display.style.fontSize = "2.5rem";
    }
    else if (str.length > 0) {
        display.style.fontSize = "3rem";
    }
    else {
        display.style.fontSize = "0.5rem";
    }
    if (check == "num") {
        return parseNumber(str);
    }
    else {
        return str ;
    }
}

butt.forEach((b) => {
    b.addEventListener("click", () => {

        let id = b.id;

        let content = document.getElementById(id).innerText;
        console.log(b, id);

        if (id === "equals") {

            lastNumber = calculationArray[0];

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
                    display.innerText = displaySize(calculationArray[0],"num");
                }

                let span = document.createElement("span");
                span.innerText = "|";
                display.appendChild(span);

                setInterval(() => {
                    if (span.innerText.endsWith("|")) {
                        span.innerText = " ";
                    }
                    else {
                        span.innerText = "|";
                    }
                }, 700);

                storing = "";
                calculationArray = [];
                return;
            }
        }

        if (["addition", "multiply", "subtraction", "divide"].includes(id)) {
            calculationArray.push(storing);
            lastNumber = storing;
            storing = "";
            calculationArray.push(b.dataset.value);
            let text = "";
            for (const i of calculationArray) {
                text += i;
                display.innerText = displaySize(text,"text");
            }
        }
        else {
            clearInterval(blinking);
            storing = storing + content;
            let text = "";
            for (const i of calculationArray) {
                text += i;
            }
            display.innerText = displaySize((text + storing),"text");
        }
    })

    function calculating(array) {
        if (array == "") {
            return 0;
        }
        for (let i = 0; i < array.length; i++) {
            if (i > 0 && i < array.length) {

                let a = parseNumber(array[i - 1]);
                let b = parseNumber(array[i + 1]);

                if (array[i] === "*") {
                    array.splice(i - 1, 3, (a * b));
                }

                else if (array[i] === "/") {
                    try {
                        array.splice(i - 1, 3, (a / b));
                    }
                    catch (error) {
                        display.style.fontSize = "1.3rem";
                        display.innerText = error;
                        break;
                    }
                }

                else if (array[i] === "+") {
                    array.splice(i - 1, 3, (a + b));
                }

                else if (array[i] === "-") {
                    array.splice(i - 1, 3, (a - b));
                }
            }
        }
    }
})

document.getElementById("refresh").addEventListener("click", () => {
    window.location.reload();
})