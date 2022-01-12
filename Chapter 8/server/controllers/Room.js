'use strict';

var utils = require('../utils/writer.js');
var Room = require('../service/RoomService');

module.exports.createRoom = function createRoom (req, res, next, body) {
  Room.createRoom(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createRoom_1 = function createRoom_1 (req, res, next, body, roomId) {
  Room.createRoom_1(body, roomId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteRoom = function deleteRoom (req, res, next, roomId) {
  Room.deleteRoom(roomId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRoom = function getRoom (req, res, next) {
  Room.getRoom()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
