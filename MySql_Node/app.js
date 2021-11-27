const express = require('express')
const mysql = require('mysql')

//Create Connection
var obj =0;
const con = mysql.createConnection({
    
      host     : 'localhost',
      user     : 'root',
      password : 'Idrbt@202122',
      database : 'project'
    
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
// let name=0;

// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// readline.question(`Enter the amount to be withdrawn = `, name => {
//   console.log(`Entered amount is ->>> ${name}!`)
  
//   // nameValue=name;
//   readline.close()
// })
// console.log(name)
let bb=1;
const balanceFromDatabase = [];
// for (let i = 0; i < a; ++i) {
// number.push(Number(readline.question()));
// }


con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * from card", function (err, result, fields) {

    if (err) throw err;
    console.log(result[1].Balance);

    // for (let i = 0; i < bb; ++i) {
    //   balanceFromDatabase.push(result[1].Balance);
    //   }
    
  });
});
// console.log('Outside value---->>>>>',balanceFromDatabase);



// Importing the module
const readline = require("readline-sync");

// Enter the number
console.log('enter the amount')
let a = 1;
let number = [];
for (let i = 0; i < a; ++i) {
number.push(Number(readline.question()));
}
console.log('Entered amount is --->>>>',number);



let balance = 5000;
const sum= balance-number;
console.log('Balance is ------------>>>>>>>>>>',sum)








app.listen('3000', () => {
     console.log('Server started on port 3000')
});
