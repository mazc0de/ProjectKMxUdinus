'use strict';


/**
 * Create round
 * This endpoint to create round in game
 *
 * body Object 
 * returns inline_response_200_6
 **/
exports.createRound = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "updated_at" : "01-12-2021 01:10 +07:00",
  "created_at" : "01-12-2021 01:01 +07:00",
  "round_created" : "01-12-2021 01:01 +07:00",
  "optionP1" : "gunting",
  "optionP2" : "batu",
  "round_winner" : "hildaharisa"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve round game information
 * This endpoint to retrieve all information about round in game
 *
 * returns inline_response_200_5
 **/
exports.getRound = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "updated_at" : "01-12-2021 01:10 +07:00",
  "created_at" : "01-12-2021 01:01 +07:00",
  "round_created" : "01-12-2021 01:01 +07:00",
  "round_ended" : "01-12-2021 01:10 +07:00",
  "optionP1" : "gunting",
  "optionP2" : "batu",
  "round_winner" : "hildaharisa"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

