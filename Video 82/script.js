async function sleep() {
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            resolve('1 Min');
        }, 1000);
    })
}

function plus(a,b,c) {
    return a + b + c ;
}
function sum(...arr) {
    return arr.reduce((a,b)=>{
        return a+b ;
    })
}
// console.log(sum(10,20,30)) ;


(async function main() {
    // let a = await sleep() ;
    // console.log(a) ;
    // let b = await sleep() ;
    // console.log(b) ;

    // let [x , y , ...varArgs] = [1 , 5 , 7 , 8 , 9 , 10] ;
    // console.log(x,y,varArgs) ;

    let obj = {a : 1 , b : 2 , c : 3}

    let {a,b} = obj
    console.log(a,b) ;

    let arr = [1,4,6] ;
    console.log(plus(arr[0],arr[1],arr[2])) ;
    console.log(plus(...arr)) ;

})()