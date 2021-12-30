const mongoose = require("mongoose")

const schema = mongoose.Schema({
	id: {
       type: "String",
       unique: true
    },
	campaigname: {
        type: "String"
     },
    username : {
        type: "String"
     },
    startDate : {
        type: "String"
     },
    totalAmount : {
        type: "String"
     },
    deadline : {
         type: "String"
     },
    ethereumAddress : {
        type: "String"
    }
})

module.exports = mongoose.model("Campaign", schema)