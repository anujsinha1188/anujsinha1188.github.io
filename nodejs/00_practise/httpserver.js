const express = require('express');
const route = require('./route');
const app = express();
app.use('/', route);
console.log(process.env.PORT);
var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(port);
});