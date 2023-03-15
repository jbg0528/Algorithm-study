// function solution(t, p) {
//   var answer = 0;
//   answer = slicing(t, p);

//   return answer;
// }
// function slicing(t, p) {
//   let count = 0;
//   let n = Number(t.substring(0, p.length));
//   if (t.length === p.length) {
//     if (n <= Number(p)) {
//       count++;
//     }
//     return count;
//   } else {
//     if (n <= Number(p)) {
//       count++;
//     }
//     return count + slicing(t.substring(1), p);
//   }
// }

//위의 풀이도 잘 돌아가지만, p가 10자리를 넘어갈 경우 런타임 에러가 발생한다.
function solution(t, p) {
  var answer = 0;

  for (i = 0; i < t.length - p.length + 1; i++) {
    if (t.substr(i, p.length) <= p) {
      console.log(i);
      answer++;
    }
  }

  return answer;
}