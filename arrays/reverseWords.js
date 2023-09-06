function reverseWords(arr) {
  let reversedWords = [];
  for (let word of arr) {
    let reversedWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    reversedWords.push(reversedWord);
  }
  return reversedWords;
}
const arr = ['hello', 'world'];
const reversedWords = reverseWords(arr);
console.log(reversedWords);
