"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Biodata", [
      {
        name: "superadmin",
        email: "superadmin@test.com",
        phone: "087712341234",
        address: "Tokyo",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "e57ddca1-81c6-4c16-97ac-1cbcc7700f83",
      },
      {
        name: "playeruser",
        email: "playeruser@test.com",
        phone: "081212341234",
        address: "New York",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "c111530c-ddbe-42b5-b69b-a43945c48c0c",
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Biodata", null, {});
  },
};
