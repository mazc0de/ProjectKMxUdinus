const path = require("path");

const error = (error, req, res, next) => {
  if (error) {
    res.sendFile(path.join(__dirname + "/../views/500.html"));
  }
};
module.exports = error;
