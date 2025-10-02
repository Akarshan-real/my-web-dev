// 5. The Sum Selector:
//    You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

function checker(array) {
    let sum = 0 ;
    for (const i of array) {
        if (i >= 0) {
            sum += i ;
        }
        else {
            return sum ;
        }
    }
    return sum ; 
}