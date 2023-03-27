let input = require("fs").readFileSync(
  "/dev/stdin"
).toString().split(" ").map((v)=>Number(v));
let N=input.shift();
let M=input.shift();
let visited=new Array(N).fill(false);
let array=[];
let result="";
function dfs(cnt){
    if(cnt===M){
        result+=`${array.join(" ")}\n`;
        return ;
    }
    for(let i=0;i<N;i++){
        array[cnt]=i+1;
        dfs(cnt+1);
    }
}
dfs(0);
console.log(result);