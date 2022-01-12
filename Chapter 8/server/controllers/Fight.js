'use strict';

var utils = require('../utils/writer.js');
var Fight = require('../service/FightService');

module.exports.playerFightPOST = function playerFightPOST (req, res, next, body) {
  Fight.playerFightPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.playerSearchGET = function playerSearchGET (req, res, next, pointLevel) {
  Fight.playerSearchGET(pointLevel)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.playerStatsGET = function playerStatsGET (req, res, next) {
  Fight.playerStatsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
