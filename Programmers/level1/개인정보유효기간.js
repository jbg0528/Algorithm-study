function solution(today, terms, privacies) {
  var answer = [];
  let termObj = new Object();
  let td = today.split(".");
  let todays = new Date(td[0] + "-" + td[1] + "-" + td[2]);
  terms.forEach(function (term) {
    let period = term.split(" ");
    termObj[period[0]]
      ? (termObj[period[0]] = period[1])
      : (termObj[period[0]] = period[1]);
  });
  privacies.forEach(function (priv, index) {
    let privacy = priv.split(" ");
    let date = ChangeDate(privacy[0]);
    let privTerm = privacy[1];
    let passedYear = todays.getFullYear() - date.getFullYear();
    let passedMonth = todays.getMonth() - date.getMonth();
    if (passedYear > 0) {
      passedMonth += passedYear * 12;
    }
    if (passedMonth === Number(termObj[privTerm])) {
      if (date.getDate() <= todays.getDate()) {
        answer.push(index + 1);
      }
    } else if (passedMonth > Number(termObj[privTerm])) {
      answer.push(index + 1);
    }
  });
  return answer;
}

function ChangeDate(privacy) {
  let date = privacy.split(".");
  return new Date(date[0] + "-" + date[1] + "-" + date[2]);
}




