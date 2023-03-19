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
for (var j = 0; j < time - 1; j++) {
  for (var k = j + 1; k < time; k++) {
    if (list[j] < list[k]) {
      temp = list[j];
      list[j] = list[k];
      list[k] = temp;
    }
  }
}

for (var l = time - 1; l >= 0; l--) {
  console.log(list[l]);
}

