const arr = ['abc','cde'];
const string = arr.toString();

function reverse(str) {
  return str.split(/([\s,.])/).
  map((item) => {
    return item.split``.reverse().join``;
  }).join``;
}

console.log(reverse(string));
