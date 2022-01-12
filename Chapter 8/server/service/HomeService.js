'use strict';


/**
 * Landing Page Home
 * endpoint to display the front page.
 *
 * returns inline_response_200
 **/
exports.rootGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "message" : "Welcome to Suwit Games!"
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

