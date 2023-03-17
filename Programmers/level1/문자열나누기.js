// function solution(s) {
//   var answer = 0;
//   let strObj = new Object();
//   let flag = 0;
//   for (let i = 0; i < s.length; i++) {
//     strObj[s[i]] ? strObj[s[i]]++ : (strObj[s[i]] = 1);
//     if (Check(strObj)) {
//       strObj = new Object();
//       answer++;
//       flag = 1;
//     } else if (i === s.length - 1) {
//       answer++;
//     }
//   }
//   if (flag === 0) {
//     answer = 1;
//   }
//   return answer;
// }
// function Check(obj) {
//   let count = 0;
//   let sum = 0;
//   for (let ob in obj) {
//     if (Object.keys(obj).length === 1) {
//       return 0;
//     } else if (count === 0) {
//       count = obj[ob];
//     } else {
//       sum += obj[ob];
//     }
//   }
//   if (sum !== count) {
//     return 0;
//   } else {
//     return 1;
//   }
// }

// 여기서도 필터를 썼으면 쉬웠다는...
function solution(s) {
  let stack = [];
  let count = 0;

  for (let i = 0; i < s.length; i += 1) {
    stack.push(s[i]);

    const same = stack.filter((item) => item === stack[0]);
    const notSame = stack.filter((item) => item !== stack[0]);

    if (same.length === notSame.length) {
      count += 1;
      stack = [];
    }
  }

  if (stack.length !== 0) {
    count += 1;
  }

  return count;
}