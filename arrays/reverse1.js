const prompt = require("prompt-sync")();
function reversestring(str){
    let newstr ='';
    for (let i= str.length-1;i>=0;i--){
      newstr=newstr+str[i];
    }
    return newstr;
  }
  //const a =['hello','world']
  const a = prompt("Enter the array: ")
  const text = a.toString();
  const result = reversestring(text);
  console.log(result);
  