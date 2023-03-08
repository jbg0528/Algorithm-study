let fs = require("fs");
let input = fs
  .readFileSync("/Users/jojo/Desktop/cpptest/input.txt")
  .toString()
  .split("\n");
let H;
let W;
let N;
let height;
let T = parseInt(input[0]);
for (var i = 0; i < T; i++) {
  let test = input[i + 1].split(" ");
  H = test[0];
  W = test[1];
  N = test[2];
  if (H == 1) {
    result = H * 100 + N / H;
  } else if (N % H == 0 && H != 1) {
    result = parseInt(H * 100 + (N - 1) / H + 1);
  } else {
    result = parseInt((N % H) * 100 + (N - 1) / H + 1);
  }
  console.log(result);
}
