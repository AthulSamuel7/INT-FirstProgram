var express = require('express');
var router = express.Router();
var mysqlpool = require('../dbconfig');

/* GET home page. */
router.get('/1', function(req, res, next) {
    mysqlpool.getConnection(function(err, connection) {
        connection.query('select Author_name from book_authors where Book_id=1', function(error, results, fields) {
            console.log(results)
            connection.release();
            if (error) throw error;
            // data1 = JSON.stringify(results, null, 1);
            // data = JSON.parse(data1);
            // data = data["Author_name"];
            console.log(results);
            res.render('index', { title: 'Express', data: JSON.stringify(results, null, 4) });
            // res.render('index', { title: 'Express', data });
        });
    });
});

router.get('/2', function(req, res, next) {
    mysqlpool.getConnection(function(err, connection) {
        connection.query('select Author_name from book_authors where Book_id=2', function(error, results, fields) {
            console.log(results)
            connection.release();
            if (error) throw error;
            res.render('index', { title: 'Express', data: JSON.stringify(results, null, 4) });
        });
    });
});

router.get('/3', function(req, res, next) {
    mysqlpool.getConnection(function(err, connection) {
        connection.query('select Author_name from book_authors where Book_id=3', function(error, results, fields) {
            console.log(results)
            connection.release();
            if (error) throw error;
            res.render('index', { title: 'Express', data: JSON.stringify(results, null, 4) });
        });
    });
});

router.get('/4', function(req, res, next) {
    mysqlpool.getConnection(function(err, connection) {
        connection.query('select Author_name from book_authors where Book_id=4', function(error, results, fields) {
            console.log(results)
            connection.release();
            if (error) throw error;
            res.render('index', { title: 'Express', data: JSON.stringify(results) });
        });
    });
});

router.get('/5', function(req, res, next) {
    mysqlpool.getConnection(function(err, connection) {
        connection.query('select Author_name from book_authors where Book_id=5', function(error, results, fields) {
            console.log(results)
            connection.release();
            if (error) throw error;
            res.render('index', { title: 'Express', data: JSON.stringify(results, null, 4) });
        });
    });
});

router.get('/6', function(req, res, next) {
    mysqlpool.getConnection(function(err, connection) {
        connection.query('select Author_name from book_authors where Book_id=6', function(error, results, fields) {
            console.log(results)
            connection.release();
            if (error) throw error;
            res.render('index', { title: 'Express', data: JSON.stringify(results, null, 4) });
        });
    });
});

module.exports = router;


// connection.query('SELECT * FROM mysql_table', function(error, results, fields) {