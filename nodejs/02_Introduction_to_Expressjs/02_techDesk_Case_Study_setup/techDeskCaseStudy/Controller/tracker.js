const repo = require('../Model/Schema');
const validator = require('../Utilities/validator');
const helper = require('../Utilities/helpers');

exports.addDefect = async (req, res) => {
  try {
    if (
      validator.ValidateName(req.body.Logger) &&
      validator.ValidateCategory(req.body.Category)
    ) {
      const Id = await helper.generateDefectId();
      const defect = await repo.create({
        DefectID: Id,
        Logger: req.body.Logger,
        Category: req.body.Category,
        Description: req.body.Description,
      });
      res.status(201).json({
        status: 'success',
        data: {
          defect,
        },
      });
    } else if (!validator.ValidateName(req.body.Logger)) {
      res.status(400).json({
        status: 'error',
        results: 'Enter valid logger details',
      });
    } else if (!validator.ValidateCategory(req.body.Category)) {
      res.status(400).json({
        status: 'error',
        results: 'Enter valid category',
      });
    }
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getAllDefects = async (req, res) => {
  try {
    const defects = await repo.find({}, { _id: 0, __v: 0 });
    if (defects.length > 0) {
      res.status(200).json({
        status: 'success',
        results: defects.length,
        data: {
          defects,
        },
      });
    } else {
      res.status(400).json({
        status: 'success',
        data: {
          message: 'No defects available in the repo',
        },
      });
    }
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getUserDefects = async (req, res) => {
  try {
    const defects = await repo.find(
      { Logger: req.params.logger },
      { _id: 0, __v: 0 }
    );
    if (defects.length > 0) {
      res.status(200).json({
        status: 'success',
        results: defects.length,
        data: {
          defects,
        },
      });
    } else {
      res.status(400).json({
        status: 'success',
        data: {
          message: 'No defects available in the repo',
        },
      });
    }
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateDefect = async (req, res) => {
  try {
    const defects = await repo.findOneAndUpdate(
      { DefectID: req.params.id },
      req.body,
      {
        new: true, //to return new doc back
        runValidators: true, //to run the validators which specified in the model
      }
    );
    if (defects != null) {
      res.status(200).json({
        status: 'success',
        data: {
          defects,
        },
      });
    } else {
      res.status(400).json({
        status: 'success',
        data: {
          message: `No defects available with ID ${req.params.id} `,
        },
      });
    }
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteDefect = async (req, res, err) => {
  const delDet = await repo.deleteOne({ DefectID: req.params.id });
  if (delDet.deletedCount === 0) {
    res.status(404).json({
      status: 'fail',
      message: 'No defect available for this ID',
    });
  } else {
    res.status(200).json({
      status: 'success',
      message: `Defect with ${req.params.id} ID deleted`,
    });
  }
};

exports.invalid = async (req, res) => {
  res.status(404).json({
    status: 'fail',
    message: 'Invalid path',
  });
};
