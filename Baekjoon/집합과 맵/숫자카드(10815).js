let fs = require("fs");
let input = fs
  .readFileSync("/Users/jojo/Desktop/Algorithm/Baekjoon/input.txt")
  .toString()
  .split("\n");

let length = input[0].split(" ");
let [N, M] = [+length[0], +length[1]];
let list = [
  ...input[1].split(" ").map(Number),
  ...input[2].split(" ").map(Number),
];
let listSet = new Set(list);
let [hasNumbers, numbers] = [
  new Set(input[1].split(" ").map(Number)),
  input[2].split(" ").map(Number),
];
let dup = [];
let answer = [];
for (let i = 0; i < M; i++) {
  if (hasNumbers.has(numbers[i])) dup.push(numbers[i]);
  else continue;
}
for (let j = 0; j < dup.length; j++) {
  if (listSet.has(dup[j])) {
    listSet.delete(dup[j]);
  } else {
    continue;
  }
}
listSet = [...listSet];
console.log(listSet.length);
