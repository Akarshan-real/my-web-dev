import fs from 'fs/promises'
import path from 'path'

let myPath = "E:\\Sigma Web Dev\\Video 91";
let collection = await fs.readdir(myPath);

clutter(collection, myPath);

async function clutter(collection, yourPath) {
    const extArray = [];

    for (const element of collection) {
        const e = path.extname(element).slice(1);

        if (e == "js" || e == 'json' || e.length == 0) {
            continue;
        }

        if (!(extArray.includes(e))) {
            extArray.push(e);
            const folderPath = path.join(yourPath, e);
            try {
                await fs.access(folderPath);
            } catch {
                await fs.mkdir(folderPath);
            }
        }
    };

    for (const e of collection) {
        const type = path.extname(e).slice(1) ;
        if (type.length == 0 || type == 'js' || type == 'json') {
            continue;
        }

        const folder = path.join(yourPath, type);
        await fs.rename(path.join(yourPath, e), path.join(folder, e));
    };
}