const { where } = require("../models/User.js");
const User = require("../models/User.js");
const controllers = {};
controllers.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({username: username });
    if (user) {
        if(password === user.password){
            return res.status(200).send({ message: "login success", data: user });
        }
        res.status(400).send("login failed");
    } else {
      res.status(400).send({ message: "password failed", data: user });
    }
  } catch (error) {
    console.log(error);
  }
};

controllers.register = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(200).send("user create success");
  } catch (error) {
    console.log(error);
  }
};

module.exports = controllers;
