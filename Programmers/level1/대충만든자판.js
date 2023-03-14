// <------ 내 풀이 --------> //
// function solution(keymap, targets) {
//   var answer = [];
//   let cpTarget = "";
//   targets.forEach(function (target) {
//     let breaking = 0;
//     let sum = 0;
//     cpTarget = target;
//     for (let i = 0; i < target.length; i++) {
//       let min = 100;
//       keymap.forEach(function (key) {
//         if (min > key.indexOf(cpTarget[0]) && key.indexOf(cpTarget[0]) >= 0) {
//           min = key.indexOf(cpTarget[0]);
//         }
//       });
//       if (min === 100) {
//         breaking = 1;
//         break;
//       } else {
//         cpTarget = cpTarget.substring(1);
//         sum += min + 1;
//       }
//     }
//     if (breaking === 1) {
//       answer.push(-1);
//     } else {
//       answer.push(sum);
//     }
//   });

//   return answer;
// }

// 효율적인 풀이방법
function solution(keymap, targets) {
  const answer = [];
  const map = {};
  for (const items of keymap) {
    items
      .split("")
      .map(
        (item, index) =>
          (map[item] = map[item] < index + 1 ? map[item] : index + 1)
      );
  }
  for (const items of targets) {
    answer.push(
      items.split("").reduce((cur, item) => (cur += map[item]), 0) || -1
    );
  }
  return answer;
}
