'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.createBiodata = function createBiodata (req, res, next, body) {
  User.createBiodata(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUser = function getUser (req, res, next) {
  User.getUser()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.playerFightPOST = function playerFightPOST (req, res, next, body) {
  User.playerFightPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.playerSearchGET = function playerSearchGET (req, res, next, pointLevel) {
  User.playerSearchGET(pointLevel)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.playerStatsGET = function playerStatsGET (req, res, next) {
  User.playerStatsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateBiodata = function updateBiodata (req, res, next, body) {
  User.updateBiodata(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
