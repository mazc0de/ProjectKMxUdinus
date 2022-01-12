'use strict';

var utils = require('../utils/writer.js');
var Admin = require('../service/AdminService');

module.exports.deleteUserById = function deleteUserById (req, res, next, userId) {
  Admin.deleteUserById(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllUsers = function getAllUsers (req, res, next) {
  Admin.getAllUsers()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRoles = function getRoles (req, res, next) {
  Admin.getRoles()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserById = function getUserById (req, res, next, userId) {
  Admin.getUserById(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateBiodataById = function updateBiodataById (req, res, next, body, userId) {
  Admin.updateBiodataById(body, userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1LevelLevelIdDELETE = function v1LevelLevelIdDELETE (req, res, next, levelId) {
  Admin.v1LevelLevelIdDELETE(levelId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1LevelLevelIdPUT = function v1LevelLevelIdPUT (req, res, next, body, levelId) {
  Admin.v1LevelLevelIdPUT(body, levelId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1LevelPOST = function v1LevelPOST (req, res, next, body) {
  Admin.v1LevelPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1RolesPOST = function v1RolesPOST (req, res, next, body) {
  Admin.v1RolesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1RolesRolesIdPUT = function v1RolesRolesIdPUT (req, res, next, body, rolesId) {
  Admin.v1RolesRolesIdPUT(body, rolesId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
