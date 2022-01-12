"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate(models) {
      Game.belongsToMany(models.User, {
        through: "UserGame",
        foreignKey: "gameId",
      });
    }
  }
  Game.init(
    {
      room: DataTypes.STRING,
      choice: DataTypes.STRING,
      winner: DataTypes.STRING,
      history: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "Game",
    }
  );
  return Game;
};
