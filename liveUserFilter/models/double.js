const mongoose = require("mongoose")

const doubleSchema = mongoose.Schema({
	url: {
       type: "String"
    },
	h: {
        type: "String"
     },
   p : {
        type: "String"
     },
})

module.exports = mongoose.model("double", doubleSchema)