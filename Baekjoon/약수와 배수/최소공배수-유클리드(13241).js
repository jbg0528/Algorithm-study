let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ");


function solution(num1, num2) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  return lcm(num1, num2);
}
let lck = solution(Number(input[0]), Number(input[1]));
console.log(lck);
