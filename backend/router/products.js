const express = require("express");
const controllers = require("../controllers/productsController");
const routeProducts = express.Router();

routeProducts.get("/v1/product", controllers.ProductGet);
routeProducts.post("/v1/product", controllers.ProductAdd);
routeProducts.put("/v1/update/product", controllers.productUpdate);
routeProducts.post("/v1/delete/product", controllers.productDelete);

module.exports =  routeProducts;
