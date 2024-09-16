const mongoose = require("mongoose");

let SalesSchema = mongoose.Schema({
    salesamount:{
        type: String
    },
    salesrating:{
        type:String
    },
    salesaverage:{
        type:String
    }
})
module.exports = mongoose.model("Sales", SalesSchema)