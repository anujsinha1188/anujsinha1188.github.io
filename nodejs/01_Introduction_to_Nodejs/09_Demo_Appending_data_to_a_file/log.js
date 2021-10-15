const fs = require('fs');
const { promisify } = require('util');

const appendFile = promisify(fs.appendFile);

(async () => {
    try {
        await appendFile('myLogger.txt', `Request received @ ${Date()} \n`);
        console.log('File content appended successfully');
    } catch (err) {
        console.log(err);
    }
})();
