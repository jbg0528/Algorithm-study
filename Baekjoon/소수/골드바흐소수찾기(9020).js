let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");
check = 1;
let sub = 0;
function isPrime(num) {
  if (num === 2) {
    return true;
  }

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      // 한 번이라도 나누어 졌으니 소수가 아니므로 return false
      return false;
    }
  }
  // 나눠진 수가 없다면 해당 수는 소수이므로 return true
  return true;
}
let number = [],
  final_first,
  final_second;
for (var t = 1; t < parseInt(input[0]) + 1; t++) {
  number[t - 1] = input[t];
}
for (var i = 0; i < number.length; i++) {
  for (var j = parseInt(number[i] / 2); j > 0; j--) {
    let first = j;
    let second = number[i] - j;
    if (isPrime(first) && isPrime(second)) {
      if (check == 1 || sub > Math.abs(first - second)) {
        sub = Math.abs(first - second);
        final_first = first;
        final_second = second;
        check = 0;
      }
    }
  }
  console.log(final_first + " " + final_second);
  sub = 0;
  check = 1;
}
