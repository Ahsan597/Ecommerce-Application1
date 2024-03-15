const mongoose = require("mongoose");

let UserSchema = mongoose.Schema({
    name:{
        type:String
    },
    name1:{
        type:String
    },
    username:{
        type:String
    },
    email:{
        type: String,
        unique: true
    },
    pass:{
        type:String
    }
})
module.exports = mongoose.model("User", UserSchema)