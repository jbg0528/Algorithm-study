let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");
let temp;
let time = parseInt(input[0]);
let list = [];

for (var i = 0; i < time; i++) {
  list[i] = parseInt(input[i + 1]);
}
list.sort(function (a, b) {
  return a - b;
});

console.log(list);

// Sort 이용시 시간단축
