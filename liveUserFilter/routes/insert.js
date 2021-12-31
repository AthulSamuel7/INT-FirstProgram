var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/double";
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("double");
//     var myobj = { "url": "www.idrbt.com", "h": "Pranay", "p": "USA" };
//     dbo.collection("doubles").insertOne(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("1 document inserted");
//         db.close();
//     });
// });

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("double");
    var myquery = { "h": "Athul" };
    var newvalues = { $set: { "h": "Athul-1" } };
    dbo.collection("doubles").updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
    });
});