const user = require("express").Router();
const userController = require("../controllers/user.controller");
const auth = require("../middleware/auth");
const { User, Biodata, Game } = require("../models");

user.get("/", (req, res) => {
  res.redirect("/login");
});

// login logout
user.get("/login", userController.login);
user.post("/login", userController.userLogin);
user.get("/logout", userController.logout);

// Client Version
user.get("/dashboard", auth, userController.dashboard);

user.get("/users", auth, userController.findAllUsers);

user.get("/users/create", auth, userController.create);
user.post("/users/create", auth, userController.createUser);

user.get("/users/edit/:id", auth, userController.update);
user.put("/users/edit/:id", auth, userController.updateUser);

user.delete("/users/:id", auth, userController.deleteUser);
user.get("/users/:id", auth, userController.getDetailUser);

user.get("/users/:id/games", auth, userController.addGames);
user.post("/users/games", auth, userController.addGamesToPlayer);

// RestAPI Version
user.get("/api/users", userController.APIgetAllUser);
user.post("/api/users", userController.APIcreateUser);
user.put("/api/users/:id", userController.APIupdateUser);
user.delete("/api/users/:id", userController.APIdeleteUser);
user.get("/api/users/:id", userController.APIgetUserById);
user.post("/api/users/:id/games", userController.APIaddGamesToPlayer);

// generate user
user.get("/dummy", auth, async (req, res) => {
  let user = await User.create({ username: "daffa404", rank: "Gold" });

  let biodata = await Biodata.create({
    name: "Daffa Hanif",
    email: "daffa@gmail.com",
    gender: "Male",
    birthdate: "2000-06-29",
    address: "Pemalang",
    userId: 1,
  });

  let user2 = await User.create({ username: "hilda15", rank: "Gold" });

  let biodata2 = await Biodata.create({
    name: "Hilda Harisa",
    email: "hilda@gmail.com",
    gender: "Female",
    birthdate: "2000-01-15",
    address: "Depok",
    userId: 2,
  });
  res.status(200).json({ user, user2, biodata, biodata2 });
});

module.exports = user;
