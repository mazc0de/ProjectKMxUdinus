'use strict';

var utils = require('../utils/writer.js');
var Biodata = require('../service/BiodataService');

module.exports.createBiodata = function createBiodata (req, res, next, body) {
  Biodata.createBiodata(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUser = function getUser (req, res, next) {
  Biodata.getUser()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateBiodata = function updateBiodata (req, res, next, body) {
  Biodata.updateBiodata(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
