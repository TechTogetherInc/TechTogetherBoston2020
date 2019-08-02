const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('form-submission');
})

module.exports = router;
