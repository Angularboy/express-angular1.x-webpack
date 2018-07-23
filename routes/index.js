var express = require('express');
var router = express.Router();
var env = require('../env.js');
console.log(env)

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express', env: env});
});
router.get('/page', function (req, res, next) {
    res.render('page', {title: 'Express', env: env});
});

module.exports = router;
