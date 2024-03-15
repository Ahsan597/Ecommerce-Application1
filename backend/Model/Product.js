const mongoose = require("mongoose");

let ProductSchema = mongoose.Schema({
    productname:{
        type:String
    },
    productprice:{
        type:String
    },
    productimage:{
        type: String
    }
})
module.exports = mongoose.model("Product", ProductSchema)