const express = require('express');

const router = express.Router();
router.get('/', function (req, res) {
  res.send('<h1>Express</h1>');
});
router.get('/about', function (req, res) {
  res.send('About Us Page');
});
module.exports = router;
