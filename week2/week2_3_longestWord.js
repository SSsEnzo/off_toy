var userInput = "I love codestates";

var longestWord = function(sen) {
  var input = sen.split(" ");
  var output = input[0]
  for (var i = 1; i < input.length; i++){
    if(output.length < input[i].length){
      output = input[i];
    }
  }
  return output;
}

console.log(longestWord(userInput));


// Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and
// return the largest word in the string.
// If there are two or more words that are the same length, return the first word from the string with that length.
// Assume sen will not be empty.
//
// Example 1: longestWord("I love codestates"); // => "codestates"
// Example 2: longestWord("Teamwork skills will take you anywhere"); // => "Teamwork"
