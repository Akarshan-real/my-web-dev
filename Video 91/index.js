import fs from 'fs/promises'
import path from 'path'

let myPath = "E:\\Sigma Web Dev\\Video 91";
let collection = ['index.html', 'style.css', 'script.js', 'file.txt', 'meow.png', 'bhow.jpg'];

organizer(collection, myPath);

async function organizer(collection, yourPath) {
    const extArray = [];

    for (const element of collection) {
        const e = path.extname(element);
        if (!(extArray.includes(e))) {
            extArray.push(e);
        }
    };

    for (const e of extArray) {
        const folderPath = path.join(yourPath, String(e).slice(1));
        try {
            await fs.access(folderPath);
        } catch {
            await fs.mkdir(folderPath);
        }
    };

    for (const e of collection) {
        const folder = path.join(yourPath, path.extname(e).slice(1));
        await fs.rename(path.join(yourPath, e), path.join(folder, e));
    };
}