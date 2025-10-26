const fs = require('fs');
const path = require('path');

let myPath = "E:\\Sigma Web Dev\\Video 91";
let collection = ['index.html','style.css','script.js','file.txt','meow.png','bhow.jpg'] ;

organizer(collection,myPath);

function organizer(collection,yourPath) {
    const extArray = [];

    collection.forEach(element => {
        const e = path.extname(element);
        if (!(extArray.includes(e))) {
            extArray.push(e);
        };
    });

    extArray.forEach((e) => {
        const folderPath = path.join(yourPath, String(e).slice(1));
        if (!(fs.existsSync(folderPath))) {
            fs.mkdirSync(folderPath) ;
        }
    });

    collection.forEach((e) => {
        const folder = path.join(yourPath , path.extname(e).slice(1)) ;

        fs.renameSync(path.join(yourPath,e) , path.join(folder,e) , (err) => {
            if (err) {
                console.log("Nope ", e ,err) ;
            }
            else {
                console.log("Yup ") ;
            }
        });
    });
}