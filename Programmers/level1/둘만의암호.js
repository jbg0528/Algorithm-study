// function solution(s, skip, index) {
//   var answer = "";
//   for (let i = 0; i < s.length; i++) {
//     let ascii = s.charCodeAt(i);
//     let alp = "";
//     let count = 0;
//     while (count <= index) {
//       alp = String.fromCharCode(ascii);
//       if (skip.includes(alp)) {
//         ascii++;
//       } else {
//         ascii++;
//         count++;
//       }
//       if (ascii > 122) {
//         ascii = ascii - 26;
//       }
//     }
//     answer += alp;
//   }

//   return answer;
// }

function solution(s, skip, index) {
  let answer = "";
  let alphabet = [..."abcdefghijklmnopqrstuvwxyz"].filter(
    (v) => ![...skip].includes(v)
  );
  let sArr = [...s];
  for (let i = 0; i < sArr.length; i++) {
    let idx = alphabet.indexOf(sArr[i]);
    const newIdx = (id) => {
      return id > alphabet.length - 1 ? newIdx(id - alphabet.length) : id;
    };
    answer += alphabet[newIdx(idx + index)];
  }
  return answer;
}
