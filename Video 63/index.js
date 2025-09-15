let array = [1,2,3,4,5,7] ;

console.log(array,typeof array) ; 
console.log(array.length) ;
console.log(array.toString()) ;
console.log(array.splice(1,3,22,33)) ;
console.log(array) ;

// array[0] = 11 ; 
// console.log(array) ;

console.log(array.join(" and ")) ;

let b = [ 1,2,3,4,5,6] ;
console.log(b.pop()) ;
console.log(b.shift());
b.unshift("Hey") ;
b.push("lmao") ;
delete b[3] ;
console.log(b[3]) ;
console.log(b) ;
console.log([42,12,35,21,3].sort((a, b) => a - b)) ;

console.log([1,2,3].concat([4,5,6])) ;