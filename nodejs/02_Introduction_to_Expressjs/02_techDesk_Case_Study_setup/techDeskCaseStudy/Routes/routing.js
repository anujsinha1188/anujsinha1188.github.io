const express = require('express');

const routing = express.Router();
const tracker = require('../Controller/tracker');

routing.post('/tracker', tracker.addDefect);

routing.get('/tracker', tracker.getAllDefects);

routing.get('/tracker/:logger', tracker.getUserDefects);

routing.put('/tracker/:id', tracker.updateDefect);

routing.delete('/tracker/:id', tracker.deleteDefect);

routing.all('*', tracker.invalid);

module.exports = routing;
