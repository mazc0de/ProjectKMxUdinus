const game = require("express").Router();
const gameController = require("../controllers/game.controller");
const auth = require("../middleware/auth");

// Client Version
game.get("/games", auth, gameController.findAllGames);

game.get("/games/create", auth, gameController.create);
game.post("/games/create", auth, gameController.createGames);

game.get("/games/:id/player", auth, gameController.addPlayer);
game.post("/games/player", auth, gameController.addPlayerToGame);

game.get("/games/edit/:id", auth, gameController.update);
game.put("/games/edit/:id", auth, gameController.updateGames);

game.delete("/games/:id", auth, gameController.deleteGame);

game.get("/games/:id", auth, gameController.getDetailGames);

// RestAPI Version
game.get("/api/games", gameController.APIgetAllGames);
game.post("/api/games", gameController.APIcreateGames);
game.put("/api/games/:id", gameController.APIupdateGames);
game.delete("/api/games/:id", gameController.APIdeleteGames);
game.get("/api/games/:id", gameController.APIgetGamesById);
game.post("/api/games/:id/player", gameController.APIaddPlayerToGame);

module.exports = game;
