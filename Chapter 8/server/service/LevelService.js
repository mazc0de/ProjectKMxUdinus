'use strict';


/**
 * Retrieve user level
 * This endpoint to retrieve all user level are available
 *
 * returns List
 **/
exports.getLevel = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete Level
 * This endpoint to delete level
 *
 * levelId String Id of level
 * returns inline_response_201_3
 **/
exports.v1LevelLevelIdDELETE = function(levelId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "message" : "Delete Success"
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
 * Edit Level
 * This endpoint to edit level
 *
 * body CreateLevelSchemas 
 * levelId String Id of level
 * returns inline_response_201_9
 **/
exports.v1LevelLevelIdPUT = function(body,levelId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "message" : "Diamond level successfully updated!"
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
 * Create a new level
 * This endpoint to create a new level
 *
 * body CreateLevelSchemas 
 * returns inline_response_201_8
 **/
exports.v1LevelPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "message" : "Diamond level successfully created!"
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

