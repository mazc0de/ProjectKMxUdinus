const jwt = require("jsonwebtoken");

module.exports = {
  authentication: (req, res, next) => {
    const token = req.headers["authorization"].split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, data) => {
      if (err) {
        return res.status(400).json({
          err,
        });
      }

      const { id, username, role } = data;
      req.user = { id, username, role };

      next();
    });
  },

  authorization: (roles) => (req, res, next) => {
    const { role } = req.user;
    if (roles.indexOf(role) < 0) {
      return res.status(403).json({
        status: "FAIL",
        data: {
          message: "Forbidden",
        },
      });
    }

    next();
  },
};
