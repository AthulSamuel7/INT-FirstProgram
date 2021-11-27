const express = require('express')
const mysql = require('mysql')

var x = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Idrbt@202122',
  database : 'project'
});

x.connect();

const conn = express();

x.query('SELECT balance from card where bin = 1234', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

conn.listen('3000', () => {
    console.log('Server started on port 3000')
});

x.end();