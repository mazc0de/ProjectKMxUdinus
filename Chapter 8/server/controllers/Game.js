'use strict';

var utils = require('../utils/writer.js');
var Game = require('../service/GameService');

module.exports.createGames = function createGames (req, res, next) {
  Game.createGames()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getGames = function getGames (req, res, next) {
  Game.getGames()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
