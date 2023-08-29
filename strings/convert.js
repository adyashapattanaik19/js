let str ="AdYaShA";
let x="";
for (let i=0;i<str.length;i++){
    let ch=str[i];
    if(str.charAt(i)== str.charAt(i).toUpperCase())
    x += str.charAt(i).toLowerCase(ch);
else
x += str.charAt(i).toUpperCase(ch);
}
console.log(x);