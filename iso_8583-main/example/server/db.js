const express = require('express')
const mysql = require('mysql')

//Create Connection

const con = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'Idrbt@202122',
    database: 'project'

});

const amount_balance = 0;

// //Connect
// con.connect((err) => {
//     if(err){
//         throw err;

//     }
//     console.log('MySql Connected....');
// });
const app = express();

// // Create DB
// app.get('/createdb', (req,res) => {
//         let sql = 'CREATE DATABASE mysqlnode';
//         con.query(sql,(err, result) =>{
//             if(err) throw err;
//             console.log(result);
//             res.send('Database created...');
//         });
// });

// Create Table

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT balance from card where bin=obj", function(err, result, fields) {
        var obj = {}
        if (err) throw err;
        console.log(result[1].Balance);
    });
});
app.listen('3000', () => {
    console.log('Server started on port 3000')
});