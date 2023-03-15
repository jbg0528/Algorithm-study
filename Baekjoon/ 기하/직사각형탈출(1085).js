let input = require("fs")
  .readFileSync("/Users/jojo/Desktop/Algorithm/Baekjoon/input.txt")
  .toString()
  .split(" ");

let x = Number(input[0]);
let y = Number(input[1]);
let w = Number(input[2]);
let h = Number(input[3]);
w - x <= x ? (x = w - x) : (x = x);
h - y <= y ? (y = h - y) : (y = y);
console.log(x >= y ? y : x);
