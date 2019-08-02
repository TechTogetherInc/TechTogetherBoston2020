const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('shehacks/dayof/map');
})

module.exports = router;
