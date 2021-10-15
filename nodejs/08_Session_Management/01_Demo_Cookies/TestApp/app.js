const express = require('express');
const cookieParser = require('cookie-parser');
const router = require('./Routes/routing');

const app = express();
app.use(cookieParser());
app.use('/', router);
app.listen(3000);
console.log('Server listening in port 3000');
