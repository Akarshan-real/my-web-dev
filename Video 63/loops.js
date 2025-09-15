let a = [1,3,5,6,89,22] ;

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element) ;
// }

// a.forEach((value,index,arr)=>{
//     console.log(value,index,arr) ;
// })

// let obj = {
//     1:"a",
//     2:"b",
//     3:"c"
// }

// for (const key in obj) {
//     if (!Object.hasOwn(obj, key)) continue;
    
//     const i = obj[key];
//     console.log(i) ;
    
    
// }


for (const i of a) {
    console.log(i) ;
}