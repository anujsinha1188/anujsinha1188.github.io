const fs = require("fs");
fs.readFile("myData.txt", "utf8", function (err, data) {
    if (err) return console.log(err);
    console.log(data);
});