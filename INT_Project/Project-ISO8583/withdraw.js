var express = require('express')

var mysql = require('mysql')

var readline = require("readline-sync");

//var readline = require('readline');




var con = mysql.createConnection({

    host: 'localhost',

    user: 'root',

    password: '1234',

    database: 'project'

});

//console.log("Enter username")

//let r = readLine();




console.log('enter the amount to be withdrwan')

let a = 1;

let number2 = [];

var User_name = '';

for (let i = 0; i < a; ++i) {

    number2.push(Number(readline.question()));

}

console.log('Entered amount is --->>>>', number2);

var withdraw = parseInt(number2)

console.log('enter the PIN')

a = 1;

let number1 = [];

var User_name = '';

for (let i = 0; i < a; ++i) {

    number1.push(Number(readline.question()));

}

var z = parseInt(number1)

// console.log('Entered amount is --->>>>',User_name);

//var z = parseInt(number1)

// var rl = readline.createInterface(

//   process.stdin, process.stdout);

// rl.question('What is your Username? ', (User_name) => {

//   console.log('Your Username is: ' + User_name);

//   rl.close();

// });

con.connect(function(err) {

    if (err) throw err;

    var sql = `SELECT Balance from card where PIN ='${z}'`;





    // var sql = `INSERT INTO dlt VALUES (${Book_id},'${Author_name}', ${Age})`;







    con.query(sql, function(err, result)

        {

            if (err) throw err;

            console.log("Done!..... and available balance is :")






            var x = (result[0].Balance)

            var y = parseInt(x)

            y = x - withdraw;

            console.log(x)

            console.log("Updated Balance is : ")



            console.log(y)




            var sql1 = `UPDATE card SET Balance='${y}' where PIN
='${z}'`;



            con.query(sql1, function(err, result)

                {

                    if (err) throw err;

                    console.log("Collect Cash!..........")



                })

        })







    //   var sql2 = `SELECT Balance from card where PIN ='${z}'` ;

    //   con.query(sql2,function(err,result)

    //   {

    //     if(err) throw err;

    //     var x = (result[0].Balance)

    //     y = parseInt(x)






    //   })







})