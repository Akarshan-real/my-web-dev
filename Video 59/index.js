
let num_1 = prompt("Enter the first number !");
let num_2 = prompt("Enter the second number !");

let which = prompt("Enter your preferable operation !");

console.log(faultyCalculator(2, 2, "+"));

function faultyCalculator(num_1, num_2, which) {
    if ("+-/*".includes(which)) {
        if (which === "+") {
            if (faultyNess()) {
                return num_1 - num_2;
            }
            else {
                return num_1 + num_2;
            }
        }
        if (which === "*") {
            if (faultyNess()) {
                return num_1 + num_2;
            }
            else {
                return num_1 * num_2;
            }
        }
        if (which === "-") {
            if (faultyNess()) {
                return num_1 / num_2;
            }
            else {
                return num_1 - num_2;
            }
        }
        if (which === "/") {
            if (faultyNess()) {
                return num_1 ** num_2;
            }
            else {
                return num_1 / num_2;
            }
        }
    }
    else {
        console.log("Kindly enter a valid operator not just some bs")
    }
}

function faultyNess() {
    return Math.random() < 0.1;
}