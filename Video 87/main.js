const fs = require('fs');

console.log('starting');
// fs.writeFileSync("harry.txt","Harry is a good boy") ;

fs.writeFile("harry2.txt", "Harry is a great boy too", () => {
    console.log("done");
    fs.readFile('harry2.txt', (error, data) => {
        console.log(error, data.toString());
    })
});


fs.appendFile('harry2.txt', "harryrobo", (error, data) => {
    console.log(data);
});

console.log('ending');

