const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
(async () => {
    try {
        //Implementation goes here
        const fileData = await readFile('src.txt', 'utf8');
        console.log(fileData);
        await writeFile('desi.txt', fileData);
        await writeFile('src.txt', '');
        console.log('Data moved from src to dest');
    } catch (err) {
        console.log(err);
    }
})();
