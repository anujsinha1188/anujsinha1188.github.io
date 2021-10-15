const http = require("http");
var server = http.createServer((req, res) => {
    console.log("Request URL is " + req.url);
    res.write("Hello World! I have created my first server!");
    res.end();
});
server.listen(3000);
console.log("Server started... Running on localhost:3000");