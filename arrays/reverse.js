//const prompt = require("prompt-sync")();
// const arr = ['abc','cde'];
// const text=arr.toString();
// let reversedstr="";
// for(let i=text.length-1;i>=0;i--){
//     reversedstr += text[i];
// }
// console.log(reversedstr);

const arr = ['abc','cde'];
const string = arr.toString();

function reverse(str) {
  return str.split(/([\s,.])/).
  map((item) => {
    return item.split``.reverse().join``;
  }).join``;
}

console.log(reverse(string));

