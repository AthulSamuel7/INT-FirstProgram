var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

// router.get('/test', function(req, res, next) {
//     res.render('testingJQ', { title: 'YOOOOOOOOOOOOOOOOOOOOOO' });
// });

module.exports = router;




// ****************************************************************************************
// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/indexnew', function(req, res, next) {
//     res.render('index', { title: 'Express' });
// });

// module.exports = router;
// *************************************************************************
// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Express' });
// });

// module.exports = router;