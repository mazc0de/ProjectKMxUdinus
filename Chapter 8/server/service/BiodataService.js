'use strict';


/**
 * Create biodata
 * This endpoint to create biodata for user who logged in
 *
 * body BiodataEntity 
 * returns inline_response_201_2
 **/
exports.createBiodata = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "address" : "Jalan Kenangan Gg. Rindu No. 28",
    "updated_at" : "28-10-2021 23:30 +07:00",
    "phone" : "+62 877-1234-9999",
    "name" : "Daffa Hanifisyafiq",
    "bio" : "miss someone far away",
    "created_at" : "28-10-2021 23:30 +07:00",
    "id" : "4eb527a7-db0e-42f9-9e57-21422a01619b",
    "avatar" : "suwitgames.com/daffa404.png"
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
 * Retrieve user profile
 * This endpoint to get the user profile who logged in
 *
 * returns inline_response_200_2
 **/
exports.getUser = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "user" : {
    "updated_at" : "28-10-2021 23:30 +07:00",
    "biodata" : {
      "address" : "Jalan Kenangan Gg. Rindu No. 28",
      "updated_at" : "28-10-2021 23:30 +07:00",
      "phone" : "+62 877-1234-9999",
      "name" : "Daffa Hanifisyafiq",
      "bio" : "miss someone far away",
      "created_at" : "28-10-2021 23:30 +07:00",
      "id" : "4eb527a7-db0e-42f9-9e57-21422a01619b",
      "avatar" : "suwitgames.com/daffa404.png",
      "userId" : "8bbefc02-6889-46c0-92da-4dadde73e4ee"
    },
    "created_at" : "28-10-2021 23:30 +07:00",
    "id" : "8bbefc02-6889-46c0-92da-4dadde73e4ee",
    "email" : "daffa@suwitgames.com",
    "username" : "daffa404"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update biodata
 * This endpoint to update biodata for user who logged in
 *
 * body UpdateBiodataEntity 
 * returns inline_response_201_1
 **/
exports.updateBiodata = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "address" : "Jalan Kenangan Gg. Rindu No. 28",
    "updated_at" : "28-10-2021 23:30 +07:00",
    "phone" : "+62 877-1234-1234",
    "name" : "Daffa",
    "bio" : "miss someone far away",
    "created_at" : "28-10-2021 23:30 +07:00",
    "id" : "4eb527a7-db0e-42f9-9e57-21422a01619b",
    "avatar" : "suwitgames.com/daffa404.png"
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

