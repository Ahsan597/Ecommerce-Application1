const mongoose = require("mongoose");

let CustomerSchema = mongoose.Schema({
    customername:{
        type:String
    },
    customerphno:{
        type:String
    },
    customerproduct:{
        type:String
    },
    customerbill:{
        type:String
    },
    customeraddress:{
        type:String
    }
})
module.exports = mongoose.model("Customer", CustomerSchema)