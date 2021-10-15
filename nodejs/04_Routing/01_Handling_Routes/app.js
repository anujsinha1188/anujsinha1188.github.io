const express = require('express');
const notesController = require('./notesController');

const app = express();
const routing = express.Router();
routing.get("/notes", notesController.getNotes);
routing.post("/notes", notesController.newNotes);

app.listen(3000, () => {
    console.log("Notes manager welcomes you!");
})