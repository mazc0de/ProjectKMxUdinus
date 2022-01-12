'use strict';


/**
 * Delete user by id
 * This endpoint to delete user include biodata who have been registered by id
 *
 * userId String Id of user to return
 * returns inline_response_201_3
 **/
exports.deleteUserById = function(userId) {
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
 * Retrieve all users
 * This endpoint to retrive all user who registered on suwitgames.com
 *
 * returns List
 **/
exports.getAllUsers = function() {
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
 * Retrieve user by id
 * This endpoint to retrive one user by id who registered on suwitgames.com
 *
 * userId String Id of user to return
 * returns user1
 **/
exports.getUserById = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update user biodata by id
 * This endpoint to update biodata user who have been registered by id
 *
 * body UpdateBiodataEntity 
 * userId String Id of user to return
 * returns inline_response_201_1
 **/
exports.updateBiodataById = function(body,userId) {
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

