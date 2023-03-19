let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

function isPrime(num){
    if(num===2){
        return 1;
    }
    for(let i=2;i<=Math.floor(Math.sqrt(num));i++){
        if(num%i===0){
            return 0;
        }
    }
    return 1;
}
for(let j=0;j<Number(input[0]);j++){
    let a=parseInt(input[j+1]);
    if(a===1||a===0){
        a=2;
    }
    else{
        while (!isPrime(a)) {
          a++;
        }
    }
    
    console.log(a);
}