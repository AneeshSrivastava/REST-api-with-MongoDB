const fs = require("fs");

async function logReq(filename) {
  return (req, resp, next) => {
    fs.appendFile(
      filename,
      `\n ${Date.now()}: ${req.method} ${req.path}`,
      (error, data) => next()
    );
  };
}

module.exports = {
  logReq,
};
