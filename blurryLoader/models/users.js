const mongoose = require("mongoose")

const schema = mongoose.Schema({
	Username: {
       type: "String"
    },
	Password: {
        type: "String"
     },
    Ethereum_Address : {
        type: "String",
        unique : true
     },
    Aadhar_Number : {
        type: "String",
        unique : true
     },
    Phone_Number : {
        type: "String",
        unique : true
     }
})

module.exports = mongoose.model("Users", schema)