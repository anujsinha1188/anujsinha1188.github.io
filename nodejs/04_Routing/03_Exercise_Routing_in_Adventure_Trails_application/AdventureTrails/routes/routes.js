const express = require('express');
const packageController = require('../controller/packageController');

const routing = express.Router()

routing.get('/packages', packageController.packages);
routing.post('/bookpackage', packageController.bookpackage);
routing.all('/all', packageController.all);
routing.all('/', packageController.all);

module.exports = routing;