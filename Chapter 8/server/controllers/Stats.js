'use strict';

var utils = require('../utils/writer.js');
var Stats = require('../service/StatsService');

module.exports.createStats = function createStats (req, res, next, body) {
  Stats.createStats(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getStats = function getStats (req, res, next) {
  Stats.getStats()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
