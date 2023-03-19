let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

function Solution(a, b) {
  let gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  return gcd(a,b);
}
let up=[],down=[];
for(let i=0;i<input.length;i++){
    let fraction= input[i].split(" ").map((v)=>Number(v));
    up.push(fraction[0]);
    down.push(fraction[1]);
    
}
let downSum=down[0]*down[1];
let upSum=down[0]*up[1]+down[1]*up[0];

console.log(upSum/Solution(upSum,downSum), downSum/Solution(upSum,downSum));