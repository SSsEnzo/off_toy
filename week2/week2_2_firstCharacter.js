var userInput = "The community at Code States might be the biggest asset";

var makeString = function(s) {
  var output = [];
  var input = s.split(" ");
  for (var i = 0; i < input.length; i++){
    output.push(input[i][0]);
  }
  return output.join("");
}

console.log(makeString(userInput));


// In this exercise, a string is passed to a method and
// a new string has to be returned with the first character of each word in the string
//
// Example 1: makeString("The community at Code States might be the biggest asset"); => "TcaCSmbtba"
