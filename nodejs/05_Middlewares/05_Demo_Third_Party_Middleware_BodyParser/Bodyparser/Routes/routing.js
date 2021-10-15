const express = require('express');
const router = express.Router();
const myController = require('../Controller/myController');

router.post('/user', myController.myMethod);

module.exports = router;




