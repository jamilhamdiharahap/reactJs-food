const express = require("express");
const controllers = require("../controllers/usersController");
const routeUser = express.Router();

routeUser.post("/v1/login", controllers.login);
routeUser.post("/v1/register", controllers.register);

module.exports =  routeUser;
