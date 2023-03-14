// function solution(cards1, cards2, goal) {
//   var answer = "";
//   let card1Arr = [];
//   let card2Arr = [];
//   for (let i = 0; i < goal.length; i++) {
//     cards1.forEach(function (card1, index) {
//       if (card1 === goal[i]) {
//         card1Arr.push(index);
//       }
//     });
//     cards2.forEach(function (card2, index2) {
//       if (card2 === goal[i]) {
//         card2Arr.push(index2);
//       }
//     });
//   }
//   let cpCard1 = [...card1Arr];
//   let cpCard2 = [...card2Arr];
//   answer = "Yes";
//   for (let i = 0; i < card1Arr.length; i++) {
//     if (card1Arr[i] !== i) {
//       answer = "No";
//       break;
//     }
//   }
//   for (let i = 0; i < card2Arr.length; i++) {
//     if (card2Arr[i] !== i) {
//       answer = "No";
//       break;
//     }
//   }

//   return answer;
// }


// 정석 풀이법
function solution(cards1, cards2, goal) {
  for (const s of goal) {
    if (cards1[0] == s) {
      cards1.shift();
    } else if (cards2[0] == s) {
      cards2.shift();
    } else {
      return "No";
    }
  }

  return "Yes";
}
