let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let head;
let bottom;
var num = parseInt(input[0]);
var k = 0;
for (var i = 0; i < num; i++) {
  if (i % 2 == 0) {
    for (var j = 1; j < i + 2; j++) {
      k++;
      head = i + 2 - j;
      bottom = j;
      if (k >= num) {
        break;
      }
    }
  } else {
    for (var j = 1; j < i + 2; j++) {
      k++;
      head = j;
      bottom = i + 2 - j;
      //   console.log(k+":"+head+"/"+bottom);
      if (k >= num) {
        break;
      }
    }
  }
  if (k == num) {
    break;
  }
}
console.log(head + "/" + bottom);
