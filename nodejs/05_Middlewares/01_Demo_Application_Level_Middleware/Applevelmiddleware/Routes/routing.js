const express = require('express');

const router = express.Router();
const myController = require('../Controller/myController');

router.get('/', myController.myMethod);
router.get('/about', myController.aboutMethod);

module.exports = router;
