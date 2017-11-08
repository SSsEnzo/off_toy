var userInput = 'I LOVE YOU';

var ROT13 = function(str) {
  var output = [];
  var input = str.split("");
  ROT13_object ={"a":"n", "b":"o", "c":"p", "d":"q", "e":"r", "f":"s", "g":"t", "h":"u", "i":"v", "j":"w", "k":"x",
  "l":"y", "m":"z", "n":"a", "o":"b", "p":"c", "q":"d", "r":"e", "s":"f", "t":"g", "u":"h", "v":"i",
  "w":"j", "x":"k", "y":"l", "z":"m" };
  for (var i = 0; i < input.length; i++){
    if (input[i] !== input[i].toLowerCase()){
      if (ROT13_object[input[i].toLowerCase()] === undefined){
        output.push(input[i]);
      } else {
        output.push(ROT13_object[input[i].toLowerCase()].toUpperCase());
      }
    } else {
      if (ROT13_object[input[i].toLowerCase()] === undefined){
        output.push(input[i]);
      } else {
        output.push(ROT13_object[input[i].toLowerCase()]);
      }
    }
  }
  return output.join("");
}


console.log(ROT13(userInput));




//(Problem)cannot return other string which is not a letter.
// var output = [];
// var input = str.split("");
// upper_case = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
//  "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//   for (var j = 0; j < upper_case.length; j++){
//     if(input[i] === upper_case[j]){
//       var p = j;
//       var k = 0;
//       while(k < 13){
//         p++
//         k++
//         if (p > 25){
//           p = 0;
//         }
//       }
//       output.push(upper_case[p]);
//     } else if (input[i] === upper_case[j].toLowerCase()){
//       var p = j;
//       var k = 0;
//       while(k < 13){
//         p++
//         k++
//         if (p > 25){
//           p = 0;
//         }
//       }
//       output.push(upper_case[p].toLowerCase());
//     }
//   }
// }
// return output.join("");




// ROT13(Rotate by 13)은 단순한 카이사르 암호의 일종으로 영어 알파벳을 13글자씩 밀어서 만든다.
// 흔히 ROT-13 혹은 rot13이라고도 쓴다. 예를 들어서 'I LOVE YOU'를 ROT13으로 암호화하면 'V YBIR LBH'가 된다.
// 이 방법은 유즈넷을 비롯한 온라인 게시판에서 퍼즐의 정답이나 스포일러 등과 같이 미리 보기를 원치 않는 내용을 암호화하는 데 자주 사용된다.
// 출처 : 위키피디아 (https://ko.wikipedia.org/wiki/ROT13)
//
// ROT13은 알파벳 소문자와 대문자에만 적용할 수 있다.
// ROT13으로 암호화한 결과를 출력하라.
//
//
// Example 1
//
// input :  "Codestates is the best bootcamp"
// output : "Pbqrfgngrf vf gur orfg obbgpnzc"
//
// Example 2
//
// input : "2 square is 4"
// output : "2 fdhner vf 4"
