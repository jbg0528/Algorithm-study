// function solution(N, stages) {
//   let result = [];
//   for (let i = 1; i <= N; i++) {
//     let reach = stages.filter((x) => x >= i).length;
//     let curr = stages.filter((x) => x === i).length;
//     result.push([i, curr / reach]);
//   }
//   result.sort((a, b) => b[1] - a[1]);
//   return result.map((x) => x[0]);
// }

// 위의 코드가 깔끔한 것은 사실이다. 하지만 시간 복잡도를 따졌을 때, 
// for문 안에 filter가 들어가있어 O(N^2)의 성능을 보임 
// 아래 식은 코드가 긴 대신 시간 복잡도가 나쁘지 않다.
// map 안에 for문을 썼지만 continue를 통해 시간 복잡도를 줄였다. 

function solution(N, stages) {
  var answer = [];
  let user = new Array(N + 1).fill(0);
  let clearUser = new Array(N + 1).fill(0);
  let failure = [];
  stages.map((v) => {
    user[v - 1]++;
  });
  let sum = user.reduce((accumulator, currentValue, idx) => {
    return accumulator + currentValue;
  }, 0);
  clearUser.map((v, index) => {
    clearUser[index] = sum;
    sum = sum - user[index];
    if (clearUser[index] === 0) {
      failure.push(0);
    } else {
      failure.push(user[index] / clearUser[index]);
    }
  });
  let sortedFail = [...failure].sort((a, b) => {
    return b - a;
  });
  sortedFail.map((v) => {
    for (let i = 0; i < sortedFail.length; i++) {
      if (v === failure[i]) {
        answer.push(i + 1);
        failure[i] = 1000;
        continue;
      }
    }
  });
  answer.splice(answer.indexOf(N + 1), 1);
  return answer;
}