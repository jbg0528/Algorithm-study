function solution(lines) {
  let answer = 0;
  let line = 0;
  let exception = 0;
  let arrObj = new Object();
  lines = lines.sort(function (a, b) {
    return b - a;
  });
  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines.length; j++) {
      if (i === j) {
        continue;
      }
      if (
        lines[i][1] + 1 === lines[j][0] &&
        lines[lines.length - j - i][0] <= lines[i][1]
      ) {
        exception++;
      }
    }
  }
  for (let i = 0; i < lines.length; i++) {
    for (let j = lines[i][0]; j <= lines[i][1]; j++) {
      arrObj[100 + j] ? arrObj[100 + j]++ : (arrObj[100 + j] = 1);
    }
  }

  console.log(arrObj);
  for (let dot in arrObj) {
    arrObj[dot] >= 2 ? (line === 1 ? answer++ : (line = 1)) : (line = 0);
  }
  console.log(exception);
  if (exception) answer--;
  return answer;
}
