//Method 1
// promisifing writeFile method
const fs = require('fs');
const writeFilePromise = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, (err) => {
            if (err) reject('Could not write file');
            resolve('success');
        });
    });
};
//Invoking the promise which we have created. Self-invocation function
(async () => {
    try {
        await writeFilePromise('myData.txt', `Hey @ ${new Date()}`);
        console.log('File created successfully with promisify and async/await!');
    } catch (err) {
        console.log(err);
    }
})();
