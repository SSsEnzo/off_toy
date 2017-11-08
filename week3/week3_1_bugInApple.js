var userInput = [["A","A","A","A","A"],["A","B","A","A","A"],["A","A","A","A","A"],["A","A","A","A","A"],["A","A","A","A","A"]];

var bugInApple = function(str) {
  var apple = eval(str);          // string str to array. Use apple variable!! (it's array type)
  for (var i = 0; i < apple.length; i++){
    for (var j = 0; j < apple[i].length; j++){
      if (apple[i][j] === "B"){
        return [i, j];
      }
    }
  }
}

console.log(bugInApple(userInput));


// Find out "B"(Bug) in a lot of "A"(Apple).
//
//  There will always be one bug in apple, not need to consider the situation that without bug or more than one bugs.
//
//  input: [["A","A","A","A","A"],["A","B","A","A","A"],["A","A","A","A","A"],["A","A","A","A","A"],["A","A","A","A","A"]]
//
//  output: [1,1]
//
//  Example :
// 2-dimesionalArray will be input.
//
// apple :
// [["A","A","A","A","A"],["A","B","A","A","A"],["A","A","A","A","A"],["A","A","A","A","A"],["A","A","A","A","A"]]
//
//
//
// Answer : [1,1]
