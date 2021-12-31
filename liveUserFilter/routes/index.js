var express = require('express');
const doubles = require('../models/double');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/1', function(req, res, next) {
    //es.send('respond with a resource');
    doubles.find({}, function(err, rows) {
        console.log(rows[0].url)
        const picUrl = rows[0].url;
        const picUrl1 = rows[1].url;


        const head1 = rows[2].h;
        const head2 = rows[3].h;
        const head3 = rows[4].h;



        const para1 = rows[2].p;
        const para2 = rows[3].p;
        const para3 = rows[4].p;




        res.render('index', { picUrl, picUrl1, head1, head2, head3, para1, para2, para3 })
    });
});


module.exports = router;