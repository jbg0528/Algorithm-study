let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("");

let arrNum=[];
let answer="";
for(let i=0;i<input.length;i++){
    arrNum.push(parseInt(input[i]));

}
arrNum.sort(function(a,b){
    return b-a;
})

for(let j=0;j<arrNum.length;j++){
    answer=answer + arrNum[j];
}
console.log(parseInt(answer));