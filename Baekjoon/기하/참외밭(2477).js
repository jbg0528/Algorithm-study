const [K, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => Number(v)));
let maxHeight = 0,
  maxWidht = 0;
let maxHeightIdx = -1,
  maxWidhtIdx = -1;


//전체 큰 사각형의 넓이를 구하고 작은 사각형의 넓이를 구하여 빼는 방법.
for (let i = 0; i < arr.length; i++) {
  //
  if (arr[i][0] == 1 || arr[i][0] == 2) {
    //가로 방향
    if (maxHeight < arr[i][1]) {
      //가로 최대값, 인덱스 저장
      maxHeight = arr[i][1];
      maxHeightIdx = i;
    }
  } else {
    if (maxWidht < arr[i][1]) {
      //세로 최대값, 인덱스 저장
      maxWidht = arr[i][1];
      maxWidhtIdx = i;
    }
  }
}
let squareMax = maxWidht * maxHeight; //큰 사각형 넓이
let squareMin = arr[(maxWidhtIdx + 3) % 6][1] * arr[(maxHeightIdx + 3) % 6][1]; //작은 사각형 넓이

console.log((squareMax - squareMin) * K);
