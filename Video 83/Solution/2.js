// 2. The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them

function main() {
    let array = [1,2,2,3,4,5] ;
    changing(array) ;
    console.log(array) ;
}
main();

function changing(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[i-1] == array[i]*2) {
            continue ;
        }
        array[i] *= 2 ; 
    }
}