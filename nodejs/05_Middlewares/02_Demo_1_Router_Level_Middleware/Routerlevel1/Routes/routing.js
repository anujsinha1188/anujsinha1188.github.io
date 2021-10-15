const express = require('express');
const router = express.Router();
const myController = require('../Controller/myController');

router.use((req, res, next) => {
    console.log(`Req method is ${req.method}`);
    console.log(`Req url is ${req.url}`);
    next();
});
router.get('/', myController.myMethod)
router.get('/about', myController.myaboutMethod)


module.exports = router;




