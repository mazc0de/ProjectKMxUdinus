"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Biodata extends Model {
    static associate(models) {
      Biodata.belongsTo(models.User, {
        foreignKey: "userId",
        as: "biodata",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Biodata.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      gender: DataTypes.STRING,
      birthdate: DataTypes.DATEONLY,
      address: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Biodata",
    }
  );
  return Biodata;
};
