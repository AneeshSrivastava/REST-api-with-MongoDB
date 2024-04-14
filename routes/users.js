const express = require("express");
const userRouter = express.Router();

const {
  handleGetAllUsers,
  handleCreateUser,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
} = require("../controllers/users");

userRouter.route("/").get(handleGetAllUsers).post(handleCreateUser);

userRouter
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

module.exports = {
  userRouter,
};
