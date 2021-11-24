// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// global.document = new JSDOM.window.document;




const header1 = document.getElementById('header')
const title1 = document.getElementById('title')
const excerpt1 = document.getElementById('excerpt')
const profile_img1 = document.getElementById('profile_img')
const name1 = document.getElementById('name')
const date1 = document.getElementById('date')
const animated_bgs1 = document.querySelectorAll('.animated-bg')
const animated_bg_texts1 = document.querySelectorAll('.animated-bg-text')





var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "library"
});

con.connect(function(err) {
    if (err) { throw err }
    con.query("select Author_name from book_authors", function(err, result, fields) {
        if (err) throw err;
        console.log(result);
        for (let i = 0; i < result.length; i++) {
            console.log('Name:', result[i].Author_name)
            name.innerHTML = result[i].Author_name
        }
    });
});

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
// });
// var userNameDB = 'test';





setTimeout(getData, 2500)

function getData() {
    header1.innerHTML =
        '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />'
    title1.innerHTML = 'Lorem ipsum dolor sit amet'
    excerpt1.innerHTML =
        'Tewsting testing'
    profile_img1.innerHTML =
        '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'

    name1.innerHTML = 'John Doe'
    date1.innerHTML = 'Oct 08, 2020'

    animated_bgs1.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bg_texts1.forEach((bg) => bg.classList.remove('animated-bg-text'))
}