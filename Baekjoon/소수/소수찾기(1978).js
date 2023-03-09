let fs = require("fs");
let input = fs
  .readFileSync("/Users/jojo/Desktop/Algorithm/Baekjoon/input.txt")
  .toString()
  .split("\n");
let number = input[1].split(" ");
let check = 1,
  result = 0;
for (var i = 0; i < number.length; i++) {
  if (number[i] == 1) {
    continue;
  }
  for (var j = 2; j < number[i]; j++) {
    if (number[i] % j == 0) {
      check = 0;
      break;
    }
  }
  if (check == 1) {
    result++;
  } else {
    check = 1;
  }
}
console.log(result);
