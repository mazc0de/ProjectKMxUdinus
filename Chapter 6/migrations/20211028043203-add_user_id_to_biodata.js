"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Biodata", "userId", {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: {
          tableName: "Users",
        },
        key: "id",
      },
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Biodata", "userId");
  },
};
