const express = require('express');
const router = express.Router();
const myController = require('../Controller/myController');

router.use('/about', (req, res, next) => {
    console.log(`Req method is ${req.method}`);
    console.log(req.originalUrl);
    next();
});

router.get('/', myController.myMethod)
router.get('/about', myController.myaboutMethod)


module.exports = router;




