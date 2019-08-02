const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('shehacks/dayof/companies');
})

module.exports = router;
