const express = require("express");

const { connectToMongoDB } = require("./connection");
const { logReq } = require("./middlewares");
const app = express();
const PORT = 8000;

connectToMongoDB("mongodb://127.0.0.1:27017/user-app-1")
  .then(() => console.log("Mongo DB Connected Successfully"))
  .catch((error) => console.log(`Failed to connect to DB. Error: ${error}`)); //TODO- Add error handling

//   Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(logReq("log.txt"));

// Routes

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
