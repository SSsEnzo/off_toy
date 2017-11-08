var userInput = 9;

function makeStar(n) {
  var star = "\*";
  var space = " ";
  for (var i = 1; i <= n; i++){
    if (i === 1){
      console.log(space.repeat(n) + star);
    } else if(i === n){
      console.log(space + star.repeat(n * 2 - 1));
    } else {
      console.log(space.repeat(n - i + 1) + star + space.repeat((i-1)*2 -1) + star)
    }
  }
}
console.log(makeStar(userInput));


// hint : make star by "console.log"



// 예제를 보고 규칙성을 찾아 별을 찍으세요.
//
// 입력 : number Range 0 ~ 10000
//
// Example 1
//
// 입력 : 1
// 출력 :
// *
//
//
// Example 2
//
// 입력 : 2
// 출력 :
//  *
// ***
// Example 3
//
// 입력 : 3
// 출력 :
//   *
//  * *
// *****
//
// 입력 : 4
// 출력 :
//    *
//   * *
//  *   *
// *******

//    *
//   * *
//  *   *
// *     *
//*********
