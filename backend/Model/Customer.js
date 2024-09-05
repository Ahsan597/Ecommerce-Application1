const mongoose = require("mongoose");

let CustomerSchema = mongoose.Schema({
    customerName:{
        type:String
    },
    customerPhno:{
        type:Number
    },
    customerGmail:{
        type: String
    },
    // customerproduct:{
    //     type:String
    // },
    // customerbill:{
    //     type:String
    // },
    customerAddress:{
        type:String
    }
})
module.exports = mongoose.model("Customer", CustomerSchema)