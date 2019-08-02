const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('2019/live/faq');
})

module.exports = router;
