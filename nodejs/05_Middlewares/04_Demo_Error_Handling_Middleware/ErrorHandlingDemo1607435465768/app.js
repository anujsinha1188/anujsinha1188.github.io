const express = require('express');
const errorLogger = require('./errorlogger')

const app = express();

app.all('*', (req, res, next) => {
    let err = new Error();
    err.message = 'Invalid Route';
    err.status = 404;
    next(err);
  });
  
app.use(errorLogger)

app.listen(3000);
console.log('Server listening in port 3000');

module.exports =app;