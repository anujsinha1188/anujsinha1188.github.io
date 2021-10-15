const NotesModel = require('../Model/NotesModel');

exports.getNotes = async (req, res) => {
  try {
    res.status(200).json({
      message: 'You can now get the requested notes for your request '
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.newNotes = async (req, res) => {
  try {
    res.status(201).json({
      data: 'New notes added for the POST request'
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.errmsg
    });
  }
};

exports.invalid = async (req, res) => {
  res.status(404).json({
    status: 'fail',
    message: 'Invalid path'
  });
};

exports.newNotesOne = async (req, res) => {
  try {
    const noteObj = {
      notesID: 7558,
      name: 'Mathan',
      data: 'Mongo Atlas is very easy to configure and use.',
    };
    const newNotes = await NotesModel.create(noteObj);
    console.log(newNotes);
  } catch (err) {
    console.log(err.errmsg);
  }
};
