const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('shehacks/dayof/schedule');
})

module.exports = router;
