const express = require('express');
const myController = require('./Controller');
var routing = express.Router();
routing.all('/',myController.myMethod);
module.exports = routing;