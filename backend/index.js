const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const routeProduct = require("./router/products");
const routeUser = require("./router/user");

const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connetion database ...");
  })
  .catch((err) => {
    console.log(err.message);
  });

  app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan("dev"));

app.use("/api/products", routeProduct);
app.use("/api/users", routeUser);

app.listen(8000, () => {
  console.log(`starting server ...`);
});
