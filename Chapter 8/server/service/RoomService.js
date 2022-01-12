'use strict';


/**
 * Create Room
 * This endpoint to create room in this game
 *
 * body Object 
 * returns inline_response_201_5
 **/
exports.createRoom = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "gameId" : "76ff6889-a240-4f9a-8292-2344ede5f6d3",
  "room_name" : "comeOnFightMe",
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
 * Create Room
 * This endpoint to create room in this game
 *
 * body Object 
 * roomId String Id room
 * returns inline_response_201_6
 **/
exports.createRoom_0 = function(body,roomId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "gameId" : "76ff6889-a240-4f9a-8292-2344ede5f6d3",
  "room_name" : "comeOnFightMeBro",
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
 * Delete Room
 *
 * roomId String Id room
 * returns inline_response_201_3
 **/
exports.deleteRoom = function(roomId) {
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
 * Retrive information game room
 * This endpoint to retrieve all information about room in this game
 *
 * returns inline_response_200_4
 **/
exports.getRoom = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "gameId" : "76ff6889-a240-4f9a-8292-2344ede5f6d3",
  "room_owner" : "daffa404",
  "created_at" : "29-11-2021 00:01 +07:00",
  "room_created_at" : "29-11-2021 00:01 +07:00",
  "id" : "5380cc52-2508-4a7c-aba6-59046518c58b",
  "updated" : "29-11-2021 00:01 +07:00",
  "room_status" : "closed"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

