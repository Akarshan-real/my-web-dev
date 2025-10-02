// 8. Async Array Mapping:
//    Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

async function main() {
    let array = [1, 2, 3, 4, 5, 6]
    for (let i = 0; i < array.length; i++) {
        array[i] = await slowMultiply(array[i]) ;
        console.log(array[i]) ;
    }
}
main();

function slowMultiply(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 2);
        }, 500);
    })
}