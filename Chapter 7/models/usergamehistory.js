"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserGameHistory extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "userId" });
      this.belongsTo(models.Game, { foreignKey: "gameId" });
    }
  }
  UserGameHistory.init(
    {
      userId: DataTypes.STRING,
      gameId: DataTypes.INTEGER,
      option: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "UserGameHistory",
    }
  );
  return UserGameHistory;
};
