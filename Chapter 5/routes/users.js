const router = require("express").Router();

let accessToken = "rahasia";
let userLogin = [];
let tempLogin = [];

// import dummy data
const dbUsers = require("../db/users.json");

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const getUser = dbUsers.find((user) => user.username === username);

  if (userLogin.length > 0 && tempLogin.length > 0) {
    res.status(200).json({
      status: "OK",
      data: {
        message: "you have login!",
      },
    });
  } else {
    if (!getUser) {
      res.status(401).json({
        status: "FAIL",
        data: {
          message: "Unauthorized, username or password is wrong!",
        },
      });
    } else {
      if (password !== getUser.password) {
        res.status(401).json({
          status: "FAIL",
          data: {
            message: "Unauthorized, username or password is wrong!",
          },
        });
      } else {
        userLogin.push(getUser);
        tempLogin.push({ username, password });
        accessToken = getUser.username + "-" + accessToken;

        res.status(201).json({
          status: "OK",
          data: {
            message: "login success!",
            username,
            accessToken,
          },
        });

        console.log("login success!");
      }
    }
  }
});

router.get("/me", (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({
      status: "FAIL",
      data: {
        message: "Unauthorized, you no have access!",
      },
    });
  } else {
    if (authHeader == accessToken) {
      if (userLogin.length === 0) {
        res.status(401).json({
          status: "FAIL",
          data: {
            message: "Unauthorized, you must login first!",
          },
        });
      } else {
        res.json({
          status: "OK",
          data: { user: userLogin },
        });
      }
    } else {
      res.status(401).json({
        status: "FAIL",
        data: {
          message: "Unauthorized, please input key correctly!",
        },
      });
    }
  }
});

router.get("/logout", (req, res) => {
  if (accessToken.length > 0 && userLogin.length > 0 && tempLogin.length > 0) {
    userLogin = [];
    tempLogin = [];
    accessToken = "rahasia";
    res.status(201).json({
      status: "OK",
      data: {
        message: "successfully logout!",
      },
    });
    console.log("successfully logout!");
  } else {
    res.status(404).json({
      status: "FAIL",
      data: {
        message: "you are not logged in!",
      },
    });
    console.log("you are not logged in!");
  }
});

module.exports = router;
