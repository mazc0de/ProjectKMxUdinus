'use strict';


/**
 * Create statistic
 * This endpoint to create statistic player
 *
 * body Object 
 * returns inline_response_201_7
 **/
exports.createStats = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "level" : "Grand Master",
    "message" : "success create stats",
    "win_rate" : 89.63,
    "point" : 300
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
 * Retrive statistic player
 * This endpoint to retrieve all statistic player
 *
 * returns inline_response_200_7
 **/
exports.getStats = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "level" : "Grand Master",
  "id" : "9e9b2096-2446-423b-8e1e-9564253f1d0b",
  "win_rate" : 86.88,
  "userId" : "8bbefc02-6889-46c0-92da-4dadde73e4ee",
  "point" : 2500
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

