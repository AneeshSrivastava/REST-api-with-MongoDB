const UserModel = require("../models/users");

async function handleGetAllUsers(req, resp) {
  const allUsersData = await UserModel.find({});
  return resp.json(allUsersData);
}

async function handleCreateUser(req, resp) {
  const body = req.body;
  if (
    !body ||
    !body.firstName ||
    !body.lastName ||
    !body.email ||
    !body.gender ||
    !body.jobTitle
  ) {
    return resp
      .status(400)
      .json({ status: "failed", message: "Missing required keys" });
  }
  // Create User in DB
  try {
    const result = await UserModel.create({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      gender: body.gender,
      jobTitle: body.jobTitle,
    });
  } catch (error) {
    return resp.status(400).json({
      status: "failed",
      message: error.errorResponse?.errmsg
        ? error.errorResponse?.errmsg
        : "Could not create user",
    });
  }
  return resp.status(200).json({ status: "success", id: result._id });
}

async function handleGetUserById(req, resp) {
  const userId = req.params.id;
  const user = await UserModel.findById(userId);
  if (!user)
    return resp
      .status(404)
      .json({ status: "failed", message: "User not found" });
  return resp.status(200).json(user);
}

async function handleUpdateUserById(req, resp) {
  const userId = req.params.id;
  try {
    await UserModel.findByIdAndUpdate(userId, { ...req.body });
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: "failed", message: "User not updated" });
  }
  return resp.status(200).json({ status: "success", message: "User updated" });
}

async function handleDeleteUserById(req, resp) {
  const userId = req.params.id;
  try {
    await UserModel.findByIdAndDelete(userId);
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: "failed", message: "User not removed" });
  }
  return resp.status(200).json({ status: "success", message: "User deleted" });
}
module.exports = {
  handleGetAllUsers,
  handleCreateUser,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
};
