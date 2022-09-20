const express = require("express");
const controllers = require("../controllers/productsController");
const routeProducts = express.Router();

routeProducts.get("/v1/product", controllers.ProductGet);
routeProducts.post("/v1/product", controllers.ProductAdd);

module.exports =  routeProducts;
