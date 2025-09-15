let a = [1,2,3,4,5,6,7,8] ;

// let newArr = [] ;
// for (let i = 0; i < a.length; i++) {
//     newArr.push(a[i]**2) ;
// }

let newArr = a.map((i , index , array)=>{
    return i**2 ; 
}
)

console.log(newArr) ;

const greaterThanSeven = (e) => {
    if (e>7) {
        return true ;
    }
    return false ; 
}

console.log(a.filter(greaterThanSeven));


let arr = [1,2,3,4,5,6] ;

const red = (a,b) => {
    return a + b ; 
}

console.log(arr.reduce(red)) ;

console.log(Array.from("LOL")) ;