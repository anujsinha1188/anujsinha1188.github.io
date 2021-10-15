// Method 2
const fs = require('fs');
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);
(async () => {
    try {
        await writeFile('myData.txt', `Hey @ ${new Date()}`);
        console.log('File created successfully with promisify and async/await!');
    } catch (err) {
        console.log(err);
    }
})();