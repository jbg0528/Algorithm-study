// let input = require("fs")
//   .readFileSync("/Users/jojo/Desktop/Algorithm/Baekjoon/input.txt")
//   .toString()
//   .split("\n");
// let size = parseInt(input[0]);
// let answer="";
// function mark(square, n, h) {
//   if(n===1){
//     return square;
//   }
//   else if (h === size) {
//     return mark(square,n/3,0);
//   } 
//   else if(){

//   }
//   else {
//     for (let j = 0; j < size; j++) {
//       if (
//         h % n >= n / 3 &&
//         j % n >= n / 3 &&
//         h % n <= (2 * n) / 3 - 1 &&
//         j % n <= (2 * n) / 3 - 1
//       ) {
//         square[h][j] = " ";
//       }
//     }
//     return mark(square, n, h + 1);
//   }
// }

// let square = Array.from(Array(size), () => Array(size).fill("*"));
// for(let i=0;i<size;i++){
//     for(let j=0;j<size;j++){
//         process.stdout.write(square[i][j]);
//     }
//     console.log("");
// }

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
let number = Number(input);
let str = "";

function PaintStar(i, j) {
  if (i % 3 === 1 && j % 3 === 1) {
    str += " ";
  } else {
    if (Math.floor(i / 3) === 0 && Math.floor(j / 3) === 0) {
      str += "*";
    } else {
      PaintStar(Math.floor(i / 3), Math.floor(j / 3));
    }
  }
}

for (let i = 0; i < number; i++) {
  for (let j = 0; j < number; j++) {
    PaintStar(i, j);
  }
  if (i !== number - 1) {
    str += "\n";
  }
}
console.log(str);