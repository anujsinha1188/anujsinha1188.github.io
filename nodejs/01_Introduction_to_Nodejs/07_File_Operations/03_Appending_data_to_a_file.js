const fs = require('fs');
const { promisify } = require('util');
const appendFile = promisify(fs.appendFile);
(async () => {
    try {
        await appendFile('myData.txt', `\nHey @ ${new Date()}`);
        console.log(
            'File content appended successfully with promisify and async/await!'
        );
    } catch (err) {
        console.log(err);
    }
})();