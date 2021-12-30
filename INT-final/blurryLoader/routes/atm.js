var express = require('express');
var mysql = require('mysql');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ATM', { title: 'ATM SYS'});
});

var con = mysql.createConnection({
    host: "localhost",
    user: "root", 
    password: "Devi@2499",
    database: "idrbt"
});

router.post('/postman', function(req, res, next) {
    var CardDetails = req.body.CardDetails
    var Amount = req.body.Amount

    console.log('TESTINGGGGGG--------->>>>', CardDetails,Amount)

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");

        var sql = `INSERT INTO txns VALUES (${CardDetails},${Amount})`;
        con.query(sql, function(err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    });

    res.send("Added succesfully")
        // res.render('postman', { title: 'Tsting postman  : ' + test });
        // res.json({ class: 'PGDBT' })
});


    router.post('/Atm', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    console.log(req.body.CardDetails)
    console.log(req.body.Amount)
    res.send("Submitted")
  });


  module.exports = router;