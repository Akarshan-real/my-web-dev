// 9. The Asynchronous Shopper:
//    Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

async function main() {
    document.body.innerText = await placeOrder("Meow") ;
}
main();


function placeOrder(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Your order " + order + " is placed") ;
        }, (Math.floor(Math.random() * (7000 - 1000 + 1)) + 1000)) ;
    })
}