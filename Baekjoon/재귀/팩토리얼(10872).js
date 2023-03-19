let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

function fibo(n){
    if(n===1){
        return 1;
    }
    else if(n===0){
        return 0;
    }
    else{
        return fibo(n-1)+fibo(n-2);
    }
}
let number=parseInt(input[0]);
console.log(fibo(number));
