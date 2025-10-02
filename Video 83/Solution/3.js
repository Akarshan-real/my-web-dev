// 3. The Mirror Mirror:
//    Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

function main() {
    console.log(addReverse("Akarshan")) ;
}
main();

function addReverse(s) {
    for (let i = s.length-1 ; i >= 0; i--) {
        s += s[i] ;
    }
    return s ;
}