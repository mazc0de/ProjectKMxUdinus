'use strict';

var utils = require('../utils/writer.js');
var Roles = require('../service/RolesService');

module.exports.getRoles = function getRoles (req, res, next) {
  Roles.getRoles()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1RolesPOST = function v1RolesPOST (req, res, next, body) {
  Roles.v1RolesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1RolesRolesIdPUT = function v1RolesRolesIdPUT (req, res, next, body, rolesId) {
  Roles.v1RolesRolesIdPUT(body, rolesId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
