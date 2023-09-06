function reverseWordsAndSentence(arr) {
  let reversedWords = [];
  for (let word of arr) {
    let reversedWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    reversedWords.push(reversedWord);
  }
  let reversedSentence = "";
  for (let i = reversedWords.length - 1; i >= 0; i--) {
    reversedSentence += reversedWords[i] + " ";
  }
  return reversedSentence.trim();
}
const arr = ['hello', 'world'];
const reversedWordsAndSentence = reverseWordsAndSentence(arr);
console.log(reversedWordsAndSentence); 
