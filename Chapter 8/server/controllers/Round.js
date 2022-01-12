'use strict';

var utils = require('../utils/writer.js');
var Round = require('../service/RoundService');

module.exports.createRound = function createRound (req, res, next, body) {
  Round.createRound(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRound = function getRound (req, res, next) {
  Round.getRound()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
