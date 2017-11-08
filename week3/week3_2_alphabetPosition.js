var userInput = "The sunset sets at twelve o' clock.";

var alphabetPosition = function(str) {
  var output = [];
  var alphabet_array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  for (var i = 0; i < str.length; i++){
    for (var j = 0; j < alphabet_array.length; j++){
      if(str[i].toLowerCase() === alphabet_array[j]){
        output.push(j + 1);
      }
    }
  }
  return output.join(" ");
}



console.log(alphabetPosition(userInput));

// (problem with the code below) if it is not a letter, it will give you a space.
  // var output = [];
  // var alphabet_object ={
  //   a:1, b:2, c:3, d:4, e:5, f:6, g:7, h:8, i:9, j:10, k:11, l:12, m:13, n:14, o:15, p:16, q:17, r:18, s:19, t:20, u:21, v:22, w: 23, x:24, y:25, z:26
  // };
  // for (var i = 0; i < str.length; i++){
  //   output.push(alphabet_object[str[i].toLowerCase()]);
  // }
  // return output.join(" ");






// In this exercise, you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it. a being 1, b being 2, etc.
//
// Example 1: alphabetPosition("The sunset sets at twelve o' clock.");
// => "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
