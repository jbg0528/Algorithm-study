// function solution(participant, completion) {
//   var answer = "";
//   let partiObj = new Object();
//   let compObj = new Object();
//   let fail = [];
//   let part = participant.filter((v) => !completion.includes(v));
//   answer = part[0];
//   participant.map((v) => {
//     partiObj[v] ? partiObj[v]++ : (partiObj[v] = 1);
//     if (partiObj[v] > 1) {
//       part.push(v);
//     }
//   });
//   completion.map((v) => {
//     compObj[v] ? compObj[v]++ : (compObj[v] = 1);
//   });
//   part.map((v) => {
//     part.map((v) => {
//       if (partiObj[v] - compObj[v] === 1) {
//         answer = v;
//       }
//     });
//   });
//   return answer;
// }

function solution(participant, completion) {
  var answer = "";

  completion[completion.length] = "";

  var arr1 = participant.sort();
  var arr2 = completion.sort();

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      answer = arr1[i];
    }
  }

  return answer;
}

// var solution = (participant, completion) =>
//   participant.find(
//     (name) => !completion[name]--,
//     completion.map((name) => (completion[name] = (completion[name] | 0) + 1))
//   );
