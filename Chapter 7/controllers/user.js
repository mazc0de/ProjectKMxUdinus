const bcrypt = require("bcryptjs");
const { User, Biodata, Game, UserGameHistory } = require("../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();

function calculate(p1, p2) {
  if (p1 == p2) return "DRAW";
  if (p1 == "batu") return p2 == "gunting" ? "p1" : "p2";
  if (p1 == "kertas") return p2 == "batu" ? "p1" : "p2";
  if (p1 == "gunting") return p2 == "kertas" ? "p1" : "p2";
}

module.exports = {
  register: async (req, res) => {
    try {
      const { username, password, name, email, phone, address } = req.body;

      const isUsernameTaken = await User.findOne({ where: { username }, raw: true });
      const isEmailRegistered = await Biodata.findOne({ where: { email }, raw: true });

      if (isUsernameTaken) {
        return res.status(400).json({
          status: "FAIL",
          data: {
            message: "Username already taken!",
          },
        });
      }

      if (isEmailRegistered) {
        return res.status(400).json({
          status: "FAIL",
          data: {
            message: "Email already registered!",
          },
        });
      }

      const hash = await bcrypt.hash(password, 10);

      const user = await User.create({
        username,
        password: hash,
      });

      const biodata = await Biodata.create({
        name,
        email,
        phone,
        address,
        userId: user.id,
      });

      res.status(201).json({
        status: "OK",
        data: {
          message: "User successfully registered!",
          user: {
            id: user.id,
            username: user.username,
          },
          biodata: {
            name: biodata.name,
            email: biodata.email,
            phone: biodata.phone,
            address: biodata.address,
          },
        },
      });
    } catch (error) {
      res.status(400).json({
        status: "ERROR",
        data: {
          message: "Oops something error!",
          error,
        },
      });
    }
  },

  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ where: { username } });

      if (!user) {
        return res.status(400).json({
          status: "FAIL",
          data: {
            message: "Username does'nt exist!",
          },
        });
      }

      bcrypt.compare(password, user.password).then((isMatch) => {
        if (!isMatch) {
          return res.status(400).json({
            status: "FAIL",
            data: {
              message: "Wrong username or password!",
            },
          });
        } else {
          const token = jwt.sign(
            {
              id: user.id,
              username: user.username,
              role: user.role,
            },
            process.env.SECRET_KEY,
            {
              expiresIn: "1h",
            }
          );

          res.status(200).json({
            status: "OK",
            data: {
              message: "Login successfully!",
              username: user.username,
              role: user.role,
              token: `Bearer ${token}`,
            },
          });
        }
      });
    } catch (error) {
      res.status(400).json({
        status: "ERROR",
        data: {
          message: "Oops something error!",
          error,
        },
      });
    }
  },

  getAllUser: async (req, res) => {
    try {
      const user = await User.findAll({
        include: [
          {
            model: Biodata,
            as: "biodata",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        ],
        attributes: {
          exclude: ["createdAt", "updatedAt", "password"],
        },
      });

      res.status(200).json({
        status: "OK",
        data: {
          user,
        },
      });
    } catch (error) {
      res.status(400).json({
        status: "ERROR",
        data: {
          message: "Oops something error!",
          error,
        },
      });
    }
  },

  editUser: async (req, res) => {
    try {
      const { username, name, email, phone, address } = req.body;

      const user = await User.findOne({ where: { id: req.params.id } });

      await User.update(
        {
          username,
        },
        { where: { id: req.params.id } }
      );

      await Biodata.update(
        {
          name,
          email,
          phone,
          address,
          userId: user.id,
        },
        { where: { userId: user.id } }
      );

      const updatedUser = await User.findOne({ where: { id: req.params.id } });
      const updatediodata = await Biodata.findOne({ where: { userId: user.id } });

      res.status(201).json({
        status: "OK",
        data: {
          message: "User successfully updated!",
          user: {
            id: updatedUser.id,
            username: updatedUser.username,
          },
          biodata: {
            name: updatediodata.name,
            email: updatediodata.email,
            phone: updatediodata.phone,
            address: updatediodata.address,
          },
        },
      });
    } catch (error) {
      res.status(400).json({
        status: "ERROR",
        data: {
          message: "Oops something error!",
          error,
        },
      });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const user = await User.findOne({ where: { id: req.params.id } });
      await Biodata.destroy({ where: { userId: user.id } });
      await User.destroy({ where: { id: req.params.id } });

      res.status(200).json({
        status: "DELETED",
        data: {
          message: "User successfully deleted!",
        },
      });
    } catch (error) {
      res.status(400).json({
        status: "ERROR",
        data: {
          message: "Oops something error!",
          error,
        },
      });
    }
  },

  getAllGames: async (req, res) => {
    try {
      const data = await Game.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });

      res.status(200).json({
        data,
      });
    } catch (error) {
      res.status(400).json({
        status: "ERROR",
        data: {
          message: "Oops something error!",
          error,
        },
      });
    }
  },

  getProfile: async (req, res) => {
    try {
      const { id } = req.user;
      const user = await User.findOne({
        where: { id },
        include: [{ model: Biodata, as: "biodata" }],
      });
      if (!user) {
        return res.status(404).end();
      }
      res.status(200).json({
        status: "OK",
        data: {
          username: user.username,
          name: user.biodata.name,
          email: user.biodata.email,
          phone: user.biodata.phone,
          address: user.biodata.address,
        },
      });
    } catch (error) {
      res.status(400).json({
        status: "ERROR",
        data: {
          message: "Oops something error!",
          error,
        },
      });
    }
  },

  createRoom: async (req, res) => {
    try {
      const { username, id } = req.user;
      const { name, option } = req.body;

      const game = await Game.create({
        name,
        owner: username,
      });

      const optionGame = await UserGameHistory.create({
        userId: id,
        gameId: game.id,
        option,
      });

      res.status(200).json({
        status: "OK",
        data: {
          message: "Room created!",
          game: {
            id: game.id,
            name: game.name,
            owner: game.owner,
          },
          optionGame: {
            option: optionGame.option,
          },
        },
      });
    } catch (error) {
      res.status(400).json({
        status: "ERROR",
        data: {
          message: "Oops something error!",
          error,
        },
      });
    }
  },

  fightRoom: async (req, res) => {
    try {
      const { id } = req.user;
      const { option } = req.body;
      const user = await User.findOne({ where: { id } });
      const game = await Game.findOne({ where: { name: req.params.name } });

      const userGame = await UserGameHistory.create({
        userId: user.id,
        gameId: game.id,
        option,
      });

      const gameid = await UserGameHistory.findAll({ where: { gameId: game.id } });

      let calculateResult = await calculate(gameid[0].option, gameid[1].option);

      if (calculateResult === "p1") {
        calculateResult = gameid[0].userId;
      } else if (calculateResult === "p2") {
        calculateResult = gameid[1].userId;
      } else {
        calculateResult = "DRAW";
      }
      if (calculateResult !== "DRAW") {
        const winner = await User.findOne({ where: { id: calculateResult } });
        await Game.update({ isWinner: winner.username }, { where: { name: req.params.name } });
        const champions = await Game.findOne({ where: { name: req.params.name } });

        return res.status(201).json({
          status: "OK",
          data: {
            message: "Figthing!",
            userGame: {
              option: userGame.option,
            },
            winner: `Congratulation the winner is ${champions.isWinner}!`,
          },
        });
      }

      await Game.update({ isWinner: "DRAW" }, { where: { name: req.params.name } });

      return res.status(201).json({
        status: "OK",
        data: {
          message: "Figthing!",
          userGame: {
            option: userGame.option,
          },
          winner: `The Game is DRAW!`,
        },
      });
    } catch (error) {
      res.status(400).json({
        status: "ERROR",
        data: {
          message: "Oops something error!",
          error,
        },
      });
    }
  },
  historyGame: async (req, res) => {
    const history = await UserGameHistory.findAll({
      where: {
        userId: req.user.id,
      },
      include: {
        model: Game,
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.status(200).json({
      status: "OK",
      data: {
        message: "This is your history game",
        history,
      },
    });
  },
};
