'use strict';

var utils = require('../utils/writer.js');
var Level = require('../service/LevelService');

module.exports.getLevel = function getLevel (req, res, next) {
  Level.getLevel()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1LevelLevelIdDELETE = function v1LevelLevelIdDELETE (req, res, next, levelId) {
  Level.v1LevelLevelIdDELETE(levelId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1LevelLevelIdPUT = function v1LevelLevelIdPUT (req, res, next, body, levelId) {
  Level.v1LevelLevelIdPUT(body, levelId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1LevelPOST = function v1LevelPOST (req, res, next, body) {
  Level.v1LevelPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
