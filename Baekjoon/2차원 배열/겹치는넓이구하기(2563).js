let fs = require("fs");
let input = fs
  .readFileSync("/Users/jojo/Desktop/cpptest/input.txt")
  .toString()
  .split("\n");
let number = parseInt(input[0]);

function removeDup(arr) {
  return [...new Set(arr.join("|").split("|"))]
    .map((v) => v.split(","))
    .map((v) => v.map((a) => +a));
}

const dot = [];
let startX, startY;
for (var i = 0; i < number; i++) {
  let start = input[i + 1].split(" ");
  startX = parseInt(start[0]);
  startY = parseInt(start[1]);
  for (var j = startX; j < startX + 10; j++) {
    for (var k = startY; k < startY + 10; k++) {
      dot.push([j, k]);
    }
  }
}
let uniqueSquare = removeDup(dot);
console.log(uniqueSquare.length);
