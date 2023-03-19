function solution(survey, choices) {
  var answer = "";
  let surObj = new Object();
  let type = ["R", "T", "C", "F", "J", "M", "A", "N"];
  survey.forEach(function (sur, index) {
    if (choices[index] > 4) {
      surObj[sur.substr(1)]
        ? (surObj[sur.substr(1)] += choices[index] - 4)
        : (surObj[sur.substr(1)] = choices[index] - 4);
      if (type.indexOf(sur.substr(1)) >= 0) {
        type.splice(type.indexOf(sur.substr(1)), 1);
      }
    } else if (choices[index] < 4) {
      surObj[sur.substr(0, 1)]
        ? (surObj[sur.substr(0, 1)] += 4 - choices[index])
        : (surObj[sur.substr(0, 1)] = 4 - choices[index]);
      console.log(type.indexOf(sur.substr(0, 1)));
      if (type.indexOf(sur.substr(0, 1)) >= 0) {
        type.splice(type.indexOf(sur.substr(0, 1)), 1);
      }
    }
  });
  type.forEach(function (typ) {
    surObj[typ] = 0;
  });
  answer += surObj["R"] < surObj["T"] ? "T" : "R";
  answer += surObj["C"] < surObj["F"] ? "F" : "C";
  answer += surObj["J"] < surObj["M"] ? "M" : "J";
  answer += surObj["A"] < surObj["N"] ? "N" : "A";

  return answer;
}


function solution(survey, choices) {
  const MBTI = {};
  const types = ["RT", "CF", "JM", "AN"];

  types.forEach((type) => type.split("").forEach((char) => (MBTI[char] = 0)));

  choices.forEach((choice, index) => {
    const [disagree, agree] = survey[index];

    MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  return types.map(([a, b]) => (MBTI[b] > MBTI[a] ? b : a)).join("");
}
