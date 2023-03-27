let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((v) => Number(v));

let N=input.shift();
let M=input.shift();
let visited=new Array(N).fill(false);
let array=[];
let result="";
function dfs(idx,cnt){
    if(cnt===M){
        result+=`${array.join(" ")}\n`;
        return ;
    }
    for(let i=idx;i<N;i++){
        array[cnt]=i+1;
        dfs(i,cnt+1);
    }
    
}
dfs(0,0);
console.log(result);