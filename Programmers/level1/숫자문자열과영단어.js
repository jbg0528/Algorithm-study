// function solution(s) {
//   var answer = 0;
//   let number = [
//     "zero",
//     "one",
//     "two",
//     "three",
//     "four",
//     "five",
//     "six",
//     "seven",
//     "eight",
//     "nine",
//   ];
//   let middleNum = "";
//   for (let i = 0; i < s.length; i++) {
//     if (s.charCodeAt(i) >= 65) {
//       middleNum += s[i];
//     } else {
//       answer = answer * 10 + Number(s[i]);
//     }
//     if (number.includes(middleNum)) {
//       answer = answer * 10 + number.indexOf(middleNum);
//       middleNum = "";
//     }
//   }
//   return answer;
// }

function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}
