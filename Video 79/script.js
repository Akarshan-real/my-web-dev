let a = prompt("Enter 1st number");
let b = prompt("Enter 2nd number");

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed");
}
let c = 1;

function main() {
    try {
        console.log("The sum is", parseInt(a) + parseInt(b) + c);
        return true;
    } catch (error) {
        console.log("Error aa gaya benstoke");
        return false;
    } finally { // used such that it will run after return too 
        console.log("Files are being closed and db is closing also");
    }
}

let x = main();
