// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, elements) {

  // input: string defining className
  // output: array with all elements of className

  var result = [];

  // redefined elements as the entire document if elements is undefined
  var elements = elements || document.body;


  if (elements.classList === undefined) {
    return result;
  }

  // if class of elements equal to className, then store elements into results
  if (elements.classList.contains(className)) {
    result.push(elements);
  }

  // if elements has child nodes, run getElementsByClassName on child nodes and store to results
  if (elements.hasChildNodes()) {
    var childNodesList = elements.childNodes;

    childNodesList.forEach(function(childNode) {
      result = result.concat(getElementsByClassName(className, childNode));
    });
  }

  // return results array
  return result;
};