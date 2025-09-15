const factorialLOOP = (n) => {
    let sum = 1 ; 
    for (let i = n; i > 0 ; i--) {
        sum *= i ;
    }
    return sum ; 
}

console.log(factorialLOOP(5)) ;

const factorialREDUCE = (n) => {
    let a = [] ;
    for (let i = 1 ; i <= n ; i++) {
        a[i] = i ; 
    }
    return a.reduce(fac = (a,b) => { return a*b }) ;
}

console.log(factorialREDUCE(5)) ;