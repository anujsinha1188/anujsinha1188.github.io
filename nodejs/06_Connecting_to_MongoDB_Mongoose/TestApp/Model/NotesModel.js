const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/IntellectNotes', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

const myNotesSchema = new mongoose.Schema(
    {
        notesID: {
            type: Number,
            unique: true,
            required: [true, 'Required field'],
        },
        name: {
            type: String,
            required: [true, 'Required field'],
        },
        data: {
            type: String,
        },
    },
    {
        timestamps: {
            createdAt: true,
            updatedAt: true,
        },
    }
);

const NotesModel = mongoose.model("mynotes", myNotesSchema);
