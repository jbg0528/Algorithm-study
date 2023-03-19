const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let answer = 0;
for (let i = 0; i < Number(input[0]); i++) {
  let [x1, y1, r1, x2, y2, r2] = input[i + 1].split(" ");
  let dist =
    Math.pow(Number(x1) - Number(x2), 2) + Math.pow(Number(y1) - Number(y2), 2);
  let distSum = Math.pow(Number(r1) + Number(r2), 2);
  let distdif = Math.pow(Number(r1) - Number(r2), 2);
  if (dist === 0) {
    if (r1 === r2) answer = -1;
    else answer = 0;
  } else {
    if (dist > distSum|| dist<distdif) {
      answer = 0;
    } else if (dist === distSum || dist === distdif) {
      answer = 1;
    } else if (dist < distSum) {
      answer = 2;
    }
  }

  console.log(answer);
}
