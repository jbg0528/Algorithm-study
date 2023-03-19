let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

input = input.replace(/\"/g, "");
input = input.replace(/\[/g, "");
input = input.replace(/\]/g, "");
input = input.replace(/ /g, "");
input = input.split(",");
var bab = ["aya", "ye", "woo", "ma"];
var word;
function compare(word) {
  var reply = 0;
  for (var i = 0; i < bab.length; i++) {
    if (word.length === 1) {
      break;
    } else if (word.includes(bab[i]) > 0) {
      if (word.replace(/X/g, "") === bab[i]) {
        reply = 1;
        return reply;
      } else {
        word = word.replace(bab[i], "X");
        reply = compare(word);
        break;
      }
    }
  }
  if (reply === 1) {
    return reply;
  } else if (reply !== 1) {
    return reply;
  }
}
function solution(babbling) {
  var answer = 0;
  for (var i = 0; i < babbling.length; i++) {
    for (var j = 0; j < bab.length; j++) {
      if (babbling[i] === bab[j]) {
        answer++;
        console.log("re:", answer);
        break;
      } else if (babbling[i].includes(bab[j])) {
        answer = answer + compare(babbling[i]);
        break;
      } else {
        continue;
      }
    }
  }
  return answer;
}
solution(input);
