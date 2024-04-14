const express = require("express");

const { connectToMongoDB } = require("./connection");

const app = express();
const PORT = 8000;

connectToMongoDB("mongodb://127.0.0.1:27017/user-app-1")
  .then(() => console.log("Mongo DB Connected Successfully"))
  .catch((error) => console.log(`Failed to connect to DB. Error: ${error}`)); //TODO- Add error handling

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
