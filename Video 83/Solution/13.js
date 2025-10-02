// 13. The Shopping Cart Totalizer:
//     You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

function calculateTotal(price,quantity) {
    let sum = 0 ; 
    for (let i = 0; i < price.length; i++) {
        sum += price[i]*quantity[i] ;
    }
    return sum ; 
}