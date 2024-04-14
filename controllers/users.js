const UserModel = require("../models/users");

async function handleGetAllUsers(req, resp) {
  const allUsersData = await UserModel.find({});
  return resp.json(allUsersData);
}

module.exports = { handleGetAllUsers };
