const express = require('express');
const helmet = require('helmet');
const routing = require('./route');

const app = express();
app.use(helmet());
app.use('/', routing);
app.listen(3000);
console.log('Server listening in port 3000');