const input = require("fs")
  .readFileSync("/Users/jojo/Desktop/Algorithm/Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\n");
let N = input[0];

const ansArr = new Array();
for (let i = 0; i < N.length; i++) {
  for(let j=i+1;j<N.length+1;j++){
    if(N.substring(i,j)===null){
      break;
    }
    ansArr.push(N.substring(i,j));
  }
}
let ansSet=new Set(ansArr);
let answer=[...ansSet];
console.log(answer.length);

