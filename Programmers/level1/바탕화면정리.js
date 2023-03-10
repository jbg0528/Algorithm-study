// function solution(wallpaper) {
//   var answer = [];
//   let coor = [];
//   let maxX = null,
//     minX = null,
//     maxY = null,
//     minY = null;
//   for (let i = 0; i < wallpaper.length; i++) {
//     for (let j = 0; j < wallpaper[i].length; j++) {
//       if (wallpaper[i][j] === "#") {
//         if (minX === null) {
//           maxX = i;
//           minX = i;
//           maxY = j;
//           minY = j;
//         }
//         if (maxX < i) {
//           maxX = i;
//         }
//         if (maxY < j) {
//           maxY = j;
//         }
//         if (minX > i) {
//           minX = i;
//         }
//         if (minY > j) {
//           minY = j;
//         }
//       }
//     }
//   }
//   maxX = maxX + 1;
//   maxY = maxY + 1;
//   answer.push(minX, minY, maxX, maxY);
//   return answer;
// }

function solution(wallpaper) {
  let left = [];
  let top = [];
  let right = [];
  let bottom = [];
  wallpaper.forEach((v, i) => {
    [...v].forEach((val, ind) => {
      if (val === "#") {
        left.push(i);
        top.push(ind);
        right.push(i + 1);
        bottom.push(ind + 1);
      }
    });
  });
  return [
    Math.min(...left),
    Math.min(...top),
    Math.max(...right),
    Math.max(...bottom),
  ];
}