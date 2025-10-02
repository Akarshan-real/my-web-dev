// 10. The Coffee Machine:
//     In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

async function main() {
    
}
main();

async function brewCoffee(coffee) {
    let array = [`Grinding ${coffee} beans...`,`Heating water...`,`Brewing ${coffee}...`,`Your ${coffee} is now hot and ready ☕`] ;
    return new Promise(async (resolve) => {
        for (const i of array) {
            await delay(5) ;
            document.body.innerText += i ;
        }
        resolve() ;
    })
}
function delay(seconds) {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve() ;
        }, Math.floor(Math.random() * (seconds * 1000 - 1000 + 1 )) + 1000 );
    })
}