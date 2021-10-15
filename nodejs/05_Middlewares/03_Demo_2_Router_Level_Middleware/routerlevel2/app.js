const express = require('express');
const router = require('./Routes/routing');

const app = express();
app.use('/', router);
app.listen(3000);
console.log('Server listening in port 3000');
