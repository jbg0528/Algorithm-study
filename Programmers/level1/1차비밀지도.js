// function solution(n, arr1, arr2) {
//   var answer = [];
//   arr1 = binary(arr1);
//   arr2 = binary(arr2);
//   for (let i = 0; i < n; i++) {
//     let result = "";
//     for (let j = 0; j < n; j++) {
//       Number(arr1[i][j]) || Number(arr2[i][j])
//         ? (result += "#")
//         : (result += " ");
//     }
//     answer.push(result);
//   }
//   return answer;
// }
// function binary(arr) {
//   let list = [];
//   for (let i = 0; i < arr.length; i++) {
//     let bin = "";
//     while (arr[i] >= 1) {
//       arr[i] % 2 ? (bin = (arr[i] % 2) + bin) : (bin = (arr[i] % 2) + bin);
//       arr[i] = Math.floor(arr[i] / 2);
//     }
//     if (bin.length < arr.length) {
//       while (bin.length !== arr.length) {
//         bin = "0" + bin;
//       }
//     }
//     list.push(bin);
//   }
//   return list;
// }

var solution = (n, a, b) =>
  a.map((a, i) =>
    (a | b[i]).toString(2).padStart(n, 0).replace(/0/g, " ").replace(/1/g, "#")
  );