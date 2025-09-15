const factorialLOOP = (n) => {
    if (n===0) {
        return 1 ;
    }
    if (n<0) {
        return -1 ;
    }
    let sum = 1 ; 
    for (let i = n; i > 0 ; i--) {
        sum *= i ;
    }
    return sum ; 
}

console.log(factorialLOOP(6)) ;

const factorialREDUCE = (n) => {
    if (n===0) {
        return 1 ;
    }
    if (n<0) {
        return -1 ;
    }
    // let a = [] ;
    // for (let i = 1 ; i <= n ; i++) {
    //     a[i] = i ; 
    // }

    // or 

    let a = Array.from(Array(n+1).keys()) ;

    return a.slice(1).reduce(fac = (a,b) => { return a*b }) ;
}

console.log(factorialREDUCE(20)) ;
