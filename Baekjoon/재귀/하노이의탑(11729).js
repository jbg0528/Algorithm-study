let input = require("fs")
  .readFileSync("/Users/jojo/Desktop/Algorithm/Baekjoon/input.txt")
  .toString()
  .split("\n");

let num=parseInt(input[0]);
let answer="";
let one=[],two=[],three=[];
for(let i=num;i>0;i--){
    one.push(i);
}
let count=0;
function move(){

}
console.log(one.pop());