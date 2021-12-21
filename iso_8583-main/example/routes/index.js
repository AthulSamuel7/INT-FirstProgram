var express = require('express');
var mysql = require('mysql');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    res.json({ class: 'PGDBT' })
});

router.get('/index', function(req, res, next) {
    var name = req.query.name
    var state = req.query.state
    var dob = req.query.dob
        // res.

    res.render('index', { title: 'My name is Athul : ' + name + state + dob });
    // res.json({ class: 'PGDBT' })
});



var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "library"
});

// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT Age FROM book_authors", function(err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//         console.log('connected');
//     });
// });


router.post('/postman', function(req, res, next) {
    var Author_name = req.body.Author_name
    var Age = req.body.Age
    var Book_id = req.body.Book_id

    console.log('TESTINGGGGGG--------->>>>', Author_name, Age, Book_id)




    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");

        var sql = `INSERT INTO dlt VALUES (${Book_id},'${Author_name}', ${Age})`;
        con.query(sql, function(err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    });

    res.send("Added succesfuklly")
        // res.render('postman', { title: 'Tsting postman  : ' + test });
        // res.json({ class: 'PGDBT' })
});

router.get('/user', function(req, res, next) {
    res.render('index', { title: 'USER PAGE' });
    // res.json({ class: 'PGDBT' })
});


module.exports = router;