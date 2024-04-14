const fs = require("fs");

function logReq(filename) {
  return (req, resp, next) => {
    fs.appendFile(
      filename,
      `\n${Date.now()}: ${req.method} ${req.path}`,
      (error, data) => {
        next();
      }
    );
  };
}

module.exports = {
  logReq,
};
