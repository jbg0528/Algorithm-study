// function solution(strings, n) {
//   var answer = [];
//   let arr = [];
//   strings.map((v) => {
//     v = v.substring(n, n + 1, 1) + v.substring(0, n) + v.substring(n + 1);
//     arr.push(v);
//   });
//   arr.sort();
//   arr.map((v) => {
//     v = v.substring(1, n + 1) + v.substring(0, 1, 1) + v.substring(n + 1);
//     answer.push(v);
//   });

//   return answer;
// }

function solution(strings, n) {
  // strings 배열
  // n 번째 문자열 비교
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}
