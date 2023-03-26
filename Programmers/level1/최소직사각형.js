// function solution(sizes) {
//   var answer = 0;
//   let max = 0;
//   let secondMax = 0;
//   sizes.map((v) => {
//     if (max < v[0] && v[0] > v[1]) {
//       max = v[0];
//     } else if (max < v[1]) {
//       max = v[1];
//     }
//   });
//   sizes.map((v) => {
//     if (v[0] <= v[1] && secondMax < v[0]) {
//       secondMax = v[0];
//     } else if (secondMax < v[1] && v[0] > v[1]) {
//       secondMax = v[1];
//     }
//   });
//   answer = max * secondMax;
//   return answer;
// }

function solution(sizes) {
  const rotated = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));

  let maxSize = [0, 0];
  rotated.forEach(([w, h]) => {
    if (w > maxSize[0]) maxSize[0] = w;
    if (h > maxSize[1]) maxSize[1] = h;
  });
  return maxSize[0] * maxSize[1];
}
