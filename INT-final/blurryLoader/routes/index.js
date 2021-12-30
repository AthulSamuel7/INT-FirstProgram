var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/random', function(req, res, next) {
    res.render('random', { title: 'random' });
});

module.exports = router;