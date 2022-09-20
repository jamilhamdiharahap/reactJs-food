const mongoose = require("mongoose");

const product = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    }
},{
    timestap:true
});

const Product = mongoose.model('Product',product);
module.exports = Product;