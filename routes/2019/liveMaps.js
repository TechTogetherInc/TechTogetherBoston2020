const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('2019/live/maps');
})

module.exports = router;
