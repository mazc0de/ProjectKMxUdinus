"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate(models) {
      this.belongsToMany(models.User, {
        through: "UserGameHistory",
        foreignKey: "gameId",
      });
    }
  }
  Game.init(
    {
      name: DataTypes.STRING,
      owner: DataTypes.STRING,
      isWinner: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Game",
    }
  );
  return Game;
};
