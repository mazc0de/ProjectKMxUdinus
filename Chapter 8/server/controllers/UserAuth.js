'use strict';

var utils = require('../utils/writer.js');
var UserAuth = require('../service/UserAuthService');

module.exports.userLogin = function userLogin (req, res, next, body) {
  UserAuth.userLogin(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userRegister = function userRegister (req, res, next, body) {
  UserAuth.userRegister(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
