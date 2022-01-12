const { User, Biodata, Game } = require("../models");
const db = require("../models/index");

exports.findAllGames = async (req, res) => {
  let user = await User.findAll({});
  let data = await Game.findAll({});

  return res.render("games/index", {
    data,
    user,
    page: "Games Rooms",
    title: "Games Room Area",
    helpers: {
      ifEquals(arg1, arg2, options) {
        return arg1 == arg2 ? options.fn(this) : options.inverse(this);
      },
      incremented(index) {
        index++;
        return index;
      },
    },
  });
};

exports.create = async (req, res) => {
  let userData = await User.findAll({});

  res.render("games/create", {
    page: "Create Games Room",
    title: "Create Games",
    userData,
  });
};

exports.createGames = async (req, res) => {
  const { room, winner, choice, history } = req.body;

  let data = await Game.create({
    room,
    choice,
    winner,
    history,
  });

  res.redirect("/games");
};

exports.addPlayer = async (req, res) => {
  let userData = await User.findAll({});
  let game = await Game.findOne({ where: { id: req.params.id } });

  res.render("games/addPlayer", {
    page: "Add players to game room",
    title: "Add Players",
    game,
    userData,
  });
};

exports.addPlayerToGame = async (req, res) => {
  const { userId, gameId } = req.body;
  const game = await Game.findOne({ where: { id: gameId } });
  const user = await User.findOne({ where: { id: userId } });

  const userGame = await game.addUser(user);

  res.redirect("/games");
};

exports.getDetailGames = async (req, res) => {
  let data = await Game.findOne({ where: { id: req.params.id } });
  const user = await data.getUsers();

  res.render("games/detail", { data, user });
};

exports.deleteGame = async (req, res) => {
  const id = req.params.id;
  let deleteRowInJunctionTable = await db.sequelize.query(
    'DELETE FROM "UserGame" WHERE "gameId" = (:id)',
    {
      replacements: { id: req.params.id },
    }
  );
  await Game.destroy({ where: { id: req.params.id } });

  res.redirect("/games");
};

exports.update = async (req, res) => {
  let data = await Game.findOne({ where: { id: req.params.id } });
  let userData = await User.findAll({});

  res.render("games/update", { data, userData });
};

exports.updateGames = async (req, res) => {
  const { room, winner, choice, history } = req.body;

  let data = await Game.update(
    {
      room,
      choice,
      winner,
      history,
    },
    { where: { id: req.params.id } }
  );

  res.redirect("/games");
};

exports.APIgetAllGames = async (req, res) => {
  let data = await Game.findAll({});

  res.status(200).json({
    status: "OK",
    data,
  });
};

exports.APIcreateGames = async (req, res) => {
  const { room, winner, choice, history } = req.body;

  let data = await Game.create({
    room,
    choice,
    winner,
    history,
  });

  res.status(201).json({
    status: "OK",
    data,
  });
};

exports.APIupdateGames = async (req, res) => {
  const { room, winner, choice, history } = req.body;

  let data = await Game.update(
    {
      room,
      choice,
      winner,
      history,
    },
    { where: { id: req.params.id } }
  );

  res.status(201).json({
    status: "OK",
  });
};

exports.APIdeleteGames = async (req, res) => {
  const id = req.params.id;

  await db.sequelize.query('DELETE FROM "UserGame" WHERE "gameId" = (:id)', {
    replacements: { id: req.params.id },
  });

  await Game.destroy({ where: { id: req.params.id } });

  res.status(201).json({
    status: "OK",
  });
};

exports.APIgetGamesById = async (req, res) => {
  let data = await Game.findOne({ where: { id: req.params.id } });
  const user = await data.getUsers();

  res.status(200).json({ status: "OK", data, user });
};

exports.APIaddPlayerToGame = async (req, res) => {
  const { userId } = req.body;
  const game = await Game.findOne({ where: { id: req.params.id } });
  const user = await User.findOne({ where: { id: userId } });

  const userGame = await game.addUser(user);

  res.status(200).json({ status: "OK", user, game, userGame });
};
