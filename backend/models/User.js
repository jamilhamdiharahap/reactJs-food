const mongoose = require("mongoose");

const user = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    verify:{
        type:Boolean
    }
},{
    timestap:true
});

const User = mongoose.model('User',user);
module.exports = User;