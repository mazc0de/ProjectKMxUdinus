'use strict';


/**
 * Retrieve roles user
 * This endpoint to retrieve all user role are available
 *
 * returns List
 **/
exports.getRoles = function() {
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
 * Create new role
 * This endpoint for create a new role
 *
 * body RoleSchema 
 * returns inline_response_201_10
 **/
exports.v1RolesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "message" : "USER role successfully created!"
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
 * Edit roles
 * This endpoint for edit role
 *
 * body RoleSchema 
 * rolesId String Id roles
 * returns inline_response_201_11
 **/
exports.v1RolesRolesIdPUT = function(body,rolesId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "message" : "USER role successfully updated!"
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

