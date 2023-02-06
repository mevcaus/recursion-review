// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here

  // input: string
  // output: object/array/number/string
  // conditions:
  // edge cases: not a string, empty string
  // if it starts with a curly
  if (json[0] === '{' && json.indexOf('}') === json.length - 1) {
    var parsedObject = {};
    // split string into array using comma dellimiter
    var splitArray = json.slice(1, json.length - 1).split(',');
    // iterate through splitarray
    splitArray.forEach(function(element) {
      // take index of colon
      var index = element.indexOf(':');
      // everything up to colon is key
      var key = element.slice(0, index);
      // everything after colon is value
      var value = element.slice(index + 2, element.length - 1);
      parsedObject[key] = parseJSON(value);
    });
    return parsedObject;
  }

  if (json[0] === '[' && json.indexOf(']') === json.length - 1) {
    var parsedArray = [];
    // split string into array using comma dellimiter
    var splitArray = json.slice(1, json.length - 1).split(',');
    // iterate through splitarray

    splitArray.forEach(function(element) {
      parsedArray.push(parseJSON(element));
    });

    return parsedArray;
  }

  if (json[0] === '"' && json.indexOf('"', 0)) {
    return json.slice(1, json.length - 2);
  }

  if (Number(json) !== NaN) {
    return Number(json);
  }
};