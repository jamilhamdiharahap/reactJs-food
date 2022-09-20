const Product = require("../models/Product.js");
const controllers = {};
controllers.ProductGet = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    console.log(error);
  }
};

controllers.ProductAdd = async (req, res) => {
  try {
    const products = new Product(req.body);
    await products.save()
    res.status(200).send("success create product");
  } catch (error) {
    console.log(error);
  }
};

controllers.productUpdate = async (req, res) => {
  try {
    await Product.findOneAndUpdate({_id:req.body.productId},req.body);
    res.status(201).send("success update product");
  } catch (error) {
    console.log(error);
  }
};

controllers.productDelete = async (req, res) => {
  try {
    console.log(req.body.productId);
    await Product.findOneAndDelete({_id:req.body.productId});
    res.status(201).send("success delete product");
  } catch (error) {
    console.log(error);
  }
};

module.exports =  controllers;
