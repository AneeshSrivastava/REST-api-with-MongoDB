const express = require("express");
const userRouter = express.Router();

const { handleGetAllUsers } = require("../controllers/users");

userRouter.route("/").get(handleGetAllUsers);

module.exports = {
  userRouter,
};
