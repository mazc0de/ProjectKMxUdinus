'use strict';


/**
 * Create Games
 * This endpoint to create games
 *
 * returns inline_response_201_4
 **/
exports.createGames = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "isWinner" : "daffa404",
    "updated_at" : "04-12-2021 00:01 +07:00",
    "created_at" : "01-12-2021 00:01 +07:00",
    "played_at" : "01-12-2021 00:01 +07:00",
    "isActive" : true,
    "ended_at" : "04-12-2021 00:01 +07:00",
    "roundActive" : "3"
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
 * Retrieve information game
 * This endpoint to retrieve all games information
 *
 * returns inline_response_200_3
 **/
exports.getGames = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "isWinner" : "daffa404",
    "updated_at" : "04-12-2021 00:01 +07:00",
    "created_at" : "01-12-2021 00:01 +07:00",
    "id" : "5380cc52-2508-4a7c-aba6-59046518c58b",
    "played_at" : "01-12-2021 00:01 +07:00",
    "isActive" : true,
    "ended_at" : "04-12-2021 00:01 +07:00",
    "roundActive" : "3"
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

