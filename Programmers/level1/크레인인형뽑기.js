// function solution(board, moves) {
//   var answer = 0;
//   let stack = [];
//   moves.map((v) => {
//     for (let i = 0; i < board.length; i++) {
//       if (board[i][v - 1] === 0) {
//         continue;
//       } else {
//         stack.push(board[i][v - 1]);
//         board[i][v - 1] = 0;
//         break;
//       }
//     }
//   });
//   answer = Check(stack);
//   return answer;
// }

// 바구니에 담긴 마지막에 담긴항목과 그전 항목이 동일한가?를 판단
// function Check(stack) {
//   let answer = 0;
//   let flag = 0;
//   let cpStack = stack;
//   stack.map((v, index) => {
//     if (stack[index] === stack[index + 1]) {
//       stack.splice(index, 2);
//       answer += 2;
//       flag = 1;
//     }
//   });
//   if (flag === 1) {
//     return answer + Check(stack);
//   } else {
//     return answer;
//   }
// }

///// 구분선
// 두 항목이 같으면 사라지는 것을 위해 재귀를 사용했으나 그럴 필요가 없었음

function solution(board, moves) {
  var count = 0;
  var stack = [];

  for (var i = 0; i < moves.length; i++) {
    var now = moves[i] - 1;
    for (var j = 0; j < board.length; j++) {
      if (board[j][now] != 0) {
        if (stack[stack.length - 1] === board[j][now]) { // 바구니에 넣을 때 바로 비교해서 같으면 pop해버리는 아이디어
          stack.pop();
          count += 2;
        } else {
          stack.push(board[j][now]);
        }
        board[j][now] = 0;
        break;
      }
    }
  }
  return count;
}
