// async function getData() {
//     // simulation of getting a data from the server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(404);
//         }, 3500);
//     })
// }

async function getData() {
    // simulation of getting a data from the server

    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // let data = await x.json() ;

    let x = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method : 'POST' ,
        body : JSON.stringify({
            title : 'foo' ,
            body : 'bar' ,
            userId : 1 
        }),
        headers : {
            'Content-type' : 'application/json ; charset = UTF-8'
        }
    })

    let data = await x.json() ;
    return data ; 
}
async function main() {
    
    console.log("Loading modules");
    console.log("Do something else");
    console.log("Load data");
    
    let data = await getData(); // await only can be used inside a function 
    
    console.log(data);
    console.log("Process data");
    console.log("Task 2");

}

main() ;
    
// data.then((message) => {
//     console.log(data);
//     console.log("Process data");
//     console.log("Task 2");
// })