'use strict';


/**
 * Fight with player
 * This endpoint to fight with other player and create room
 *
 * body Object 
 * returns inline_response_201_12
 **/
exports.playerFightPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "gameId" : "76ff6889-a240-4f9a-8292-2344ede5f6d3",
  "room_name" : "comeOnFightMe",
  "room_owner" : "daffa404",
  "created_at" : "29-11-2021 00:01 +07:00",
  "room_created_at" : "29-11-2021 00:01 +07:00",
  "id" : "5380cc52-2508-4a7c-aba6-59046518c58b",
  "updated" : "29-11-2021 00:01 +07:00",
  "room_status" : "open"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Search player by point and level
 * This endpoint to search player by point and level
 *
 * pointLevel Integer  (optional)
 * returns inline_response_200_8
 **/
exports.playerSearchGET = function(pointLevel) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "level" : "Grand Master",
    "point" : 3500,
    "username" : "daffa404"
  },
  "status" : "OK"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve stats player
 * This endpoint to retrieve stats player
 *
 * returns inline_response_200_9
 **/
exports.playerStatsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "levelId" : "9e9b2096-2446-423b-8e1e-9564253f1d0b",
  "userId" : "8bbefc02-6889-46c0-92da-4dadde73e4ee",
  "point" : 3500
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

