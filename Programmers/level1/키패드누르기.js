function solution(numbers, hand) {
  var answer = "";
  let keyPad = [
    [1, 4, 7],
    [2, 5, 8, 0],
    [3, 6, 9],
  ];
  let leftPos = [0, 3],
    rightPos = [2, 3];
  numbers.map((v) => {
    console.log(v);
    keyPad.map((key, index) => {
      let keyPos = key.indexOf(v);

      if (key.includes(v) && index !== 1) {
        if (index === 0) {
          answer += "L";
          leftPos = [0, keyPos];
        } else if (index === 2) {
          answer += "R";
          rightPos = [2, keyPos];
        }
      } else if (key.includes(v) && index === 1) {
        if (
          Math.abs(leftPos[0] - index) + Math.abs(leftPos[1] - keyPos) >
          Math.abs(rightPos[0] - index) + Math.abs(rightPos[1] - keyPos)
        ) {
          rightPos = [1, keyPos];
          answer += "R";
        } else if (
          Math.abs(leftPos[0] - index) + Math.abs(leftPos[1] - keyPos) ===
          Math.abs(rightPos[0] - index) + Math.abs(rightPos[1] - keyPos)
        ) {
          if (hand === "right") {
            rightPos = [1, keyPos];
            answer += "R";
          } else {
            leftPos = [1, keyPos];
            answer += "L";
          }
        } else {
          leftPos = [1, keyPos];
          answer += "L";
        }
      }
    });
  });
  return answer;
}
