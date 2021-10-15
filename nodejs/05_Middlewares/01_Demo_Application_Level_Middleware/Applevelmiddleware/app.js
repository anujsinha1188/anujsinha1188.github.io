const express = require('express');
const router = require('./Routes/routing');

const app = express();

// Custome logger middleware
const mylogger = function (req, res, next) {
  console.log(`Req method is ${req.method}`);
  console.log(`Req url is ${req.url}`);
  next();
};

// using app object make use of logger middleware function
app.use(mylogger);
app.use('/', router);
app.listen(3000);
console.log('Server listening in port 3000');
