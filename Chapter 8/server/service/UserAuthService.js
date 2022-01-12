'use strict';


/**
 * Retieve access token user
 * This endpoint to retrieve the access token when user logged in with correct credential.
 *
 * body Object 
 * returns inline_response_200_1
 **/
exports.userLogin = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "message" : "Login success!",
    "accessToken" : "XXXXX",
    "refreshToken" : "XXXXX"
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
 * Register new user
 * This endpoint is used to register new users.
 *
 * body Object 
 * returns inline_response_201
 **/
exports.userRegister = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "updated_at" : "28-10-2021 23:30 +07:00",
    "created_at" : "28-10-2021 23:30 +07:00",
    "message" : "Register success!",
    "email" : "daffa@suwitgames.com",
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

