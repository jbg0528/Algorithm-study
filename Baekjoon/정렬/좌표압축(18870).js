let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

let length=input[0];
let answer="";
let sortedArr=input[1].split(" ").map(Number).sort((a,b)=>a-b);
let arr=input[1].split(" ").map(Number);
sortedArr=[...new Set(sortedArr)];
let arrObj=new Object();
for(let i=0;i<sortedArr.length;i++){
    arrObj[sortedArr[i]]? 1:arrObj[sortedArr[i]]=i;
}
for(let j=0;j<arr.length;j++){
    answer += `${arrObj[arr[j]]}` + " ";
}
console.log(answer);