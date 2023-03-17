// 프로그래머스에서 시간초과 오류를 처음 겪은 상황
// for 문에서 1000000만번을 돌렸을 때 너무 많은 시간이 드는 듯 하다.

// function solution(ingredient) {
//   var answer = 0;
//   answer = Hamb(ingredient);
//   return answer;
// }
// function Hamb(ingre) {
//   let count = 0;
//   let sub = "";
//   for (let i = 0; i < ingre.length - 3; i++) {
//     if (
//       ingre[i] === 1 &&
//       ingre[i + 1] === 2 &&
//       ingre[i + 2] === 3 &&
//       ingre[i + 3] === 1
//     ) {
//       count++;
//       ingre.splice(i, 4);
//       return count + Hamb(ingre);
//     }
//   }
//   return 0;
// }

// 변수 자체가 아닌 스택을 만들어 사용하면 시간 단축
function solution(ingredient) {
  let answer = 0;
  let stack = [];
  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);
    if (
      stack[stack.length - 1] === 1 &&
      stack[stack.length - 2] === 3 &&
      stack[stack.length - 3] === 2 &&
      stack[stack.length - 4] === 1
    ) {
      answer++;
      stack.splice(stack.length - 4, 4);
    }
  }
  return answer;
}
