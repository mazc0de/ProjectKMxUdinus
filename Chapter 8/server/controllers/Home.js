'use strict';

var utils = require('../utils/writer.js');
var Home = require('../service/HomeService');

module.exports.rootGET = function rootGET (req, res, next) {
  Home.rootGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
