// 4. The Password Validator:
//    You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

function main() {
    console.log(passwordValidator("Akarshan"));
}
main();

function passwordValidator(pass) {
    if (pass.length < 8) {
        return false;
    }
    let charChecker = "abcdefghijklmnopqrstuvwxyz";
    let numChecker = "0123456789";
    let a = false;
    let b = false;
    let c = false;
    for (let i = 0; i < pass.length; i++) {
        let char = pass[i];
        if (!a && charChecker.includes(char)) {
            a = true;

        }
        if (!b && charChecker.toUpperCase().includes(char)) {
            b = true

        }
        if (!c && numChecker.includes(char)) {
            c = true;

        }
        if (a && b && c) {
            return true;
        }
    }
    return false;
}