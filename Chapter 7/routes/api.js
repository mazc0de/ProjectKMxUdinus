const router = require("express").Router();
const UserController = require("../controllers/user");
const { authentication, authorization } = require("../middleware/auth");

router.get("/", (req, res) => {
  res.send("hello");
});

// register & login
router.post("/api/register", UserController.register);
router.post("/api/login", UserController.login);

// only SuperAdmin can access it
router.get("/api/users", authentication, authorization(["SuperAdmin"]), UserController.getAllUser);
router.put("/api/users/:id", authentication, authorization(["SuperAdmin"]), UserController.editUser);
router.delete("/api/users/:id", authentication, authorization(["SuperAdmin"]), UserController.deleteUser);
router.get("/api/games", authentication, authorization(["SuperAdmin"]), UserController.getAllGames);

// SuperAdmin and PlayerUser can access it
router.get("/api/profile", authentication, authorization(["SuperAdmin", "PlayerUser"]), UserController.getProfile);
router.post("/api/create-room", authentication, authorization(["SuperAdmin", "PlayerUser"]), UserController.createRoom);
router.post("/api/fight/:name", authentication, authorization(["SuperAdmin", "PlayerUser"]), UserController.fightRoom);
router.get("/api/history", authentication, authorization(["SuperAdmin", "PlayerUser"]), UserController.historyGame);

module.exports = router;
