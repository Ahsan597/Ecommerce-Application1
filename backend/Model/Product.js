const mongoose = require("mongoose");

let ProductSchema = mongoose.Schema({
    productName:{
        type:String,
        required: true
    },
    productPrice:{
        type:Number,
        required: true
    },
    productBrand:{
        type: String,
        required: true
    },
    productImageurl:{
        type: String,
        required: true
    },
    productCategory:{
        type: String,
        required: true
    }
})
module.exports = mongoose.model("Product", ProductSchema)