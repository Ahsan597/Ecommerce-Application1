const mongoose = require("mongoose");

let ProductSchema = mongoose.Schema({
    productName:{
        type:String
    },
    productPrice:{
        type:Number
    },
    productQuantity:{
        type: Number
    }
})
module.exports = mongoose.model("Product", ProductSchema)