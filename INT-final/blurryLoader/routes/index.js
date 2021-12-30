var express = require('express');
var router = express.Router();
var connection = require('../core/db');

const picUrl = '';

// router.get('/', function(req, res, next) {


//     con.connect(function(err) {
//         if (err) throw err;
//         var sql = 'SELECT link from finaltable where id=1 ';
//         con.query(sql, function(err, result) {
//             if (err) throw err;
//             console.log(result);
//             picUrl = result;
//         });
//     });
//     // res.send("Added succesfully")
//     res.render('index', { picUrl });
// });

router.get('/', function(req, res) {
    let sql = "SELECT link from finaltable where id=1 ";
    connection.query(sql, function(err, results) {
        if (err) throw err;
        // res.send(results);
        res.render('index', { picUrl });

    });
});


/* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Express' });
// });

router.get('/random', function(req, res, next) {
    res.render('random', { title: 'random' });
});

module.exports = router;











// var router = express.Router();
// var express = require("express");
// var app = express();
// // var connection = require('./database');
// var connection = require('../core/db');

// router.get('/', function(req, res) {
//     let sql = "SELECT link from finaltable where id=1 ";
//     connection.query(sql, function(err, results){
//         if (err) throw err;
//         res.send(results);
//     });
// });