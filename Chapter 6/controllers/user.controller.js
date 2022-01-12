const ADMIN = {
  username: "daffa",
  password: "daffa",
};

const { User, Biodata, Game } = require("../models");
const db = require("../models/index");

exports.login = (req, res) => {
  res.render("login/index", { layout: false, title: "Login Page" });
};

exports.userLogin = (req, res) => {
  const { username, password } = req.body;

  if (username !== ADMIN.username || password !== ADMIN.password) {
    return res.status(401).json({
      message: "username or password is wrong!",
    });
  }

  req.session.user = "daffa";
  req.session.admin = true;
  res.redirect("/dashboard");
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect("/login");
};

exports.dashboard = async (req, res) => {
  let countJunction = await db.sequelize.query('SELECT COUNT(*) FROM "UserGame"', { raw: true });

  const userCount = await User.count({});
  const gamesRoomCount = await Game.count({});

  return res.render("dashboard", {
    page: "Dashboard",
    userCount,
    gamesRoomCount,
    countJunction: countJunction[0][0].count,
    title: "Dashboard",
  });
};

exports.findAllUsers = async (req, res) => {
  let data = await User.findAll({
    include: [{ model: Biodata, as: "biodata" }],
  });

  return res.render("users/index", {
    data,
    page: "User List",
    title: "User List",
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

exports.getDetailUser = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;

  let data = await User.findOne({
    where: {
      id,
    },
    include: [{ model: Biodata, as: "biodata" }],
  });
  const games = await data.getGames();

  return res.render("users/detail", {
    data,
    games,
    title: "Detail User",
    page: "Detail User",
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

exports.create = (req, res) => {
  return res.render("users/create", {
    page: "Create User",
    title: "Create User",
  });
};

exports.createUser = async (req, res) => {
  const { username, rank, name, email, gender, birthdate, address } = req.body;

  let user = await User.create({ username, rank });

  let biodata = await Biodata.create({
    name,
    email,
    gender,
    birthdate,
    address,
    userId: user.id,
  });

  res.redirect("/users");
};

exports.deleteUser = async (req, res) => {
  const id = req.params.id;

  await db.sequelize.query('DELETE FROM "UserGame" WHERE "userId" = (:id)', {
    replacements: { id: req.params.id },
  });

  await Biodata.destroy({ where: { userId: id } });
  await User.destroy({ where: { id }, include: [{ model: Biodata }] });
  res.redirect("/users");
};

exports.update = async (req, res) => {
  const id = req.params.id;
  let data = await User.findOne({
    where: { id },
    include: [{ model: Biodata, as: "biodata" }],
  });
  return res.render("users/update", {
    page: "Update User",
    data,
    title: "Update User",
  });
};

exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const { username, rank, name, email, gender, birthdate, address } = req.body;
  let biodata = await Biodata.update(
    {
      name,
      email,
      gender,
      birthdate,
      address,
    },
    { where: { id } }
  );

  let user = await User.update(
    { username, rank },
    {
      where: { id },
    }
  );
  res.redirect("/users");
};

exports.addGames = async (req, res) => {
  const user = await User.findOne({ where: { id: req.params.id } });
  const gameData = await Game.findAll({});
  // res.json({ gameData });
  res.render("users/addGames", {
    title: "Play",
    page: "Add games room to player",
    gameData,
    user,
  });
};

exports.addGamesToPlayer = async (req, res) => {
  const { userId, gameId } = req.body;
  const game = await Game.findOne({ where: { id: gameId } });
  const user = await User.findOne({ where: { id: userId } });

  const userGame = await user.addGames(game);
  res.redirect("/users");
};

exports.APIgetAllUser = async (req, res) => {
  let data = await User.findAll({
    include: [{ model: Biodata, as: "biodata" }],
  });

  res.status(200).json({
    status: "OK",
    data,
  });
};

exports.APIcreateUser = async (req, res) => {
  const { username, rank, name, email, gender, birthdate, address } = req.body;

  let user = await User.create({ username, rank });

  let biodata = await Biodata.create({
    name,
    email,
    gender,
    birthdate,
    address,
    userId: user.id,
  });

  res.status(201).json({
    status: "OK",
    user,
    biodata,
  });
};

exports.APIupdateUser = async (req, res) => {
  const id = req.params.id;

  const { username, rank, name, email, gender, birthdate, address } = req.body;

  let biodata = await Biodata.update(
    {
      name,
      email,
      gender,
      birthdate,
      address,
    },
    { where: { id } }
  );

  let user = await User.update(
    { username, rank },
    {
      where: { id },
    }
  );

  res.status(201).json({
    status: "OK",
    user,
    biodata,
  });
};

exports.APIdeleteUser = async (req, res) => {
  const id = req.params.id;
  await Biodata.destroy({ where: { userId: id } });
  await User.destroy({ where: { id }, include: [{ model: Biodata }] });
  res.status(201).json({
    status: "OK",
  });
};

exports.APIgetUserById = async (req, res) => {
  const id = req.params.id;

  let data = await User.findOne({
    where: {
      id,
    },
    include: [{ model: Biodata, as: "biodata" }],
  });
  const games = await data.getGames();

  res.status(201).json({
    status: "OK",
    data,
  });
};

exports.APIaddGamesToPlayer = async (req, res) => {
  const { gameId } = req.body;
  const game = await Game.findOne({ where: { id: gameId } });
  const user = await User.findOne({ where: { id: req.params.id } });

  const userGame = await user.addGames(game);
  res.status(201).json({
    status: "OK",
    game,
    user,
    userGame,
  });
};
