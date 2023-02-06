// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  // Input: Object
  // Output: String
  // if obj is an edge case of null/undefined

  if (obj === null) {
    return 'null';
  }

  if (obj === undefined) {
    return undefined;
  }

  // if obj is a boolean or number
  if (typeof obj === 'boolean' || typeof obj === 'number') {
    return obj.toString();
  }
  // if obj is string, return itself
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  // // if obj is number, convert to string
  // if (typeof obj === 'number') {
  //   return obj.toString();
  // }
  if (typeof obj === 'function') {
    return '{}';
  }
  // if array, then loop over array and call stringifyJSON on all elements. Ensuring to add [] to the output
  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    }
    var result = '[';
    obj.forEach(function(element) {
      result += stringifyJSON(element) + ',';
    });
    return result.slice(0, result.length - 1) + ']';
  }
  // if object, then loop over object and call stringifyJSON on all elements. Ensuring to add {} to the output
  if (typeof obj === 'object') {
    console.log('i am passing in: ' + obj);
    if (Object.keys(obj).length === 0) {
      return '{}';
    }
    var result = '{';
    for (var element in obj) {
      if (typeof element === 'function' || typeof element === 'undefined') {
        continue;
      }
      if (typeof obj[element] === 'function' || typeof obj[element] === 'undefined') {
        continue;
      }
      result += stringifyJSON(element) + ':' + stringifyJSON(obj[element]) + ',';
    }
    console.log('i am outputting ' + result.slice(0, result.length - 1) + '}');

    if (result.length === 1) {
      return result + '}';
    }
    return result.slice(0, result.length - 1) + '}';
  }


  // if function, ??
  // [1, 2, 3] !== [[1, 2, 3]]??? TBD
};