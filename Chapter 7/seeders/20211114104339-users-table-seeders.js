"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        id: "e57ddca1-81c6-4c16-97ac-1cbcc7700f83",
        username: "superadmin",
        password: "$2a$10$BV20KAiSE/hiSc4yMteW6.DDHpuVUF1cc308dCrQA3uZpAeSBooyi",
        role: "SuperAdmin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "c111530c-ddbe-42b5-b69b-a43945c48c0c",
        username: "playeruser",
        password: "$2a$10$Yr6EbKyFDzb3Cm1rM4W50edCAOXJoPUNasuKpoc6wm5nLflAlgFn2",
        role: "PlayerUser",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
