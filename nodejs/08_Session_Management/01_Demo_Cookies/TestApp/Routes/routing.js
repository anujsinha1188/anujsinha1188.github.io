const express = require('express');
const myController = require('../Controller/myController');

const router = express.Router();

router.get('/user/:name', myController.user1);
router.get('/user', myController.user2);

module.exports = router;
