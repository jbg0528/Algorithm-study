let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

let arrNum = [],
  sum = 0,
  arrLen = parseInt(input[0]),
  answer = [];
let mean,
  median,
  freq=[],
  range,
  arrObj = new Object(),
  max = 0;
for (let i = 0; i < arrLen; i++) {
  arrNum.push(parseInt(input[i + 1]));
  arrObj[input[i + 1]] ? arrObj[input[i + 1]]++ : (arrObj[input[i + 1]] = 1);
  sum = sum + parseInt(input[i + 1]);
}
arrNum.sort(function(a,b){
    return a-b;
});
for (obj in arrObj) {
  if (max === parseInt(arrObj[obj])) {
    freq.push(obj);
  } else if (max <= parseInt(arrObj[obj])) {
    max = parseInt(arrObj[obj]);
    freq = [];
    freq.push(obj);
  }
}

mean = Math.round(sum / arrLen);
if(mean===-0){
    mean=0;
}
console.log(mean);
median = arrNum[parseInt(arrLen / 2)];
console.log(median);
freq.sort(function (a, b) {
  return a - b;
});
if(freq.length>1){
    console.log(freq[1]);
}
else{
    console.log(freq[0]);
}
range = arrNum[arrLen - 1] - arrNum[0];
console.log(range);
