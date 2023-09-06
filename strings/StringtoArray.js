function sentenceToWords(str) {
    let words = [];
    let word = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== " ") {
        word += str[i];
      } 
      else {
        words.push(word);
        word = "";
      }
    }
    words.push(word);
    return words;
  }
  const sentence = "We can create a javascript string using the new keyword";
  const words = sentenceToWords(sentence);
  console.log(words); 
