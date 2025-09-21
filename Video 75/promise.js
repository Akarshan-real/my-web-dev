// alert('Akarshan');
console.log('Hello there');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you");
    }
    else {
        setTimeout(() => {
            console.log('Finished');
            resolve("Akarshan");
        }, 3000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 2");
    }
    else {
        setTimeout(() => {
            console.log('Finished 2');
            resolve("Akarshan 2");
        }, 1000);
    }
})

let p3 = Promise.resolve([prom1,prom2]);
p3.then((a) => {
    console.log(a) ;
}).catch((error) => {
    console.log(error) ;
})

// prom1.then((a) => {
//     console.log(a);
// }).catch((error) => {
//     console.log(error) ;
// })