var userInput = "32";

var powerOfTwo = function(str) {
  var num = Number(str);      // use num variable.
  while(num > 1){
    num = num / 2;
  }
  if (num === 1){
    return true;
  } else {
    return false;
  }
}

console.log(powerOfTwo(userInput));


// Using the JavaScript language, have the function powerOfTwo(num)
// take the num parameter being passed which will be an integer and return the string true if it's a power of two.
// If it's not return the string false.
//
// Example : if the input is 16 then your program should return the string true
// but if the input is 22 then the output should be the string false.
