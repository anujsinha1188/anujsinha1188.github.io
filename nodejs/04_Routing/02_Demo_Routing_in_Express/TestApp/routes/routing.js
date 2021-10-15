const express = require('express');

const routing = express.Router();
const notesController = require('../Controller/myNotes');

routing.get('/notes', notesController.getNotes);

routing.post('/notes', notesController.newNotes);

routing.all('*', notesController.invalid);

module.exports = routing;
