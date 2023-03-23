// function solution(id_list, report, k) {
//   var answer = new Array(id_list.length);
//   answer.fill(0);
//   let arrSet = new Set(report);
//   let reports = [...arrSet];
//   let reportObj = new Object();
//   id_list.map((user) => {
//     reportObj[user] = [];
//   });
//   reports.map((user) => {
//     let [reportId, reported] = user.split(" ");
//     if (!reportObj[reported].includes(reportId)) {
//       reportObj[reported].push(reportId);
//     }
//   });
//   for (let key in reportObj) {
//     if (reportObj[key].length >= k) {
//       reportObj[key].map((v) => {
//         answer[id_list.indexOf(v)] += 1;
//       });
//     }
//   }
//   return answer;
// }

// 정식 풀이법
function solution(id_list, report, k) {
  let reports = [...new Set(report)].map((a) => {
    return a.split(" ");
  });
  let counts = new Map();
  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
  }
  let good = new Map();
  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      good.set(report[0], good.get(report[0]) + 1 || 1);
    }
  }
  let answer = id_list.map((a) => good.get(a) || 0);
  return answer;
}