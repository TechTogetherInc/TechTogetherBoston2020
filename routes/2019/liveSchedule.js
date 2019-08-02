const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('2019/live/schedule');
})

module.exports = router;
