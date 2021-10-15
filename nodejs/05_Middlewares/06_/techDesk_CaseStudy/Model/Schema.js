const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/techDesk', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!'));

//Schema
const Schema = new mongoose.Schema(
  {
    DefectID: {
      type: Number,
      unique: true,
      required: true,
    },
    Logger: {
      type: String,
      required: true,
    },
    Category: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);

//Model
const repo = mongoose.model('repo', Schema);

repo.deleteMany({}, function (err) {
  console.log('collection removed');
});

module.exports = repo;
