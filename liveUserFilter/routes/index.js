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
        const picUrl1 = rows[0].url;
        const picUrl2 = rows[1].url;
        const picUrl3 = rows[2].url;

        const head1 = rows[2].h;
        const head2 = rows[3].h;
        const head3 = rows[4].h;

        const color1 = rows[0].p;
        const color2 = rows[1].p;
        const color3 = rows[0].h;

        const para1 = rows[2].p;
        const para2 = rows[3].p;
        const para3 = rows[4].p;

        res.render('index', { picUrl1, picUrl2, picUrl3, head1, head2, head3, para1, para2, para3, color1, color2, color3 })
    });
});

router.get('/2', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post("/insert", async(req, res) => {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost/double";
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("double");
        var myobj = { "url": "www.idrbt.com", "h": "Pranay", "p": "USA" };
        dbo.collection("doubles").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });
})


module.exports = router;