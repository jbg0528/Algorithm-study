// function solution(new_id) {
//   var answer = "";
//   let allowed = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//     ".",
//     "-",
//     "_",
//     "0",
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//   ];

//   //map과 filter는 array에만 적용되는 듯함
//   answer = Change(allowed, new_id);
//   return answer;
// }
// function Change(allowed, new_id) {
//   //level1
//   new_id = new_id.toLowerCase();
//   for (let i = 0; i < new_id.length; i++) {
//     if (!allowed.includes(new_id[i])) {
//       new_id = new_id.replaceAll(new_id[i], " ");
//     }
//   }

//   //level2,3
//   new_id = new_id.replaceAll(" ", "");
//   new_id = new_id.replaceAll(/[.]+/gi, ".");

//   //level4
//   while (new_id[0] === ".") {
//     new_id = new_id.substring(1);
//   }
//   while (new_id[new_id.length - 1] === ".") {
//     new_id = new_id.slice(0, -1);
//   }
//   //level5
//   if (new_id.length === 0) {
//     new_id += "a";
//   }

//   //level6
//   if (new_id.length > 15) {
//     new_id = new_id.substring(0, 15);
//     while (new_id[new_id.length - 1] === ".") {
//       new_id = new_id.slice(0, -1);
//     }
//   }

//   //level7
//   if (new_id.length <= 2) {
//     while (new_id.length !== 3) {
//       new_id += new_id[new_id.length - 1];
//     }
//   }
//   return new_id;
// }

const solution = (new_id) => {
  const id = new_id
    .toLowerCase()
    .replace(/[^\w\d-_.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "")
    .padEnd(1, "a")
    .slice(0, 15)
    .replace(/^\.|\.$/g, "");
  return id.padEnd(3, id[id.length - 1]);
};
