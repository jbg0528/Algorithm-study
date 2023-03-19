let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

function solution(num1, num2) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  return lcm(num1, num2);
}

for(let i=1;i<=Number(input[0]);i++){
  let number=input[i].split(" ");
  let gcd,lcm=solution(number[0],number[1]);
  console.log(lcm);
}

// 유클리드 호제법을 이용해 시간 복잡도 단축
// function solution(num1, num2) {
//   const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
//   const lcm = (a, b) => (a * b) / gcd(a, b);
//   return [gcd(num1, num2), lcm(num1, num2)];
// }