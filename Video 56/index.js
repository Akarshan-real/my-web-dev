console.log("Hello I am conditional tutorial ");
console.log();

let age = 45;
age = 18;
// let grace = 2 ; 

// age += grace ; 
// console.log(age) ;

// console.log(age + grace) ; 
// console.log(age - grace) ; 
// console.log(age * grace) ; 
// console.log(age / grace) ; 
// console.log(age ** grace); 
// console.log(age % grace) ; 

/*
I am a          
Multiline       
Comment              
*/

if (age == 18) {
    console.log("You can drive");
}

else if (age == 0) {
    console.log("At least born first lil bro");
}

else {
    console.log("You cannot drive");
}

let a = 6;
let b = 8;
let c = a > b ? (a - b) : (b - a); 

/*

This translates to 
if(a>b) {
    let c = a - b ; 
}
else {
    let c = a + b ;     
}

*/
