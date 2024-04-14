const mongoose = require("mongoose");

async function connectToMongoDB(connectionUrl) {
  return mongoose.connect(connectionUrl);
}

module.exports = {
  connectToMongoDB,
};
