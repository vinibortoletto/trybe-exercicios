// const getLongestWord = (sentence) => {
//   const words = sentence.split(' ');
//   let longestWord = '';

//   for (let i = 0; i < words.length; i += 1) {
//     if (words[i + 1]) {
//       if (words[i].length > words[i + 1].length) {
//         longestWord = words[i];
//       } else {
//         longestWord = words[i + 1];
//       }
//     }
//   }

//   console.log(longestWord);
// };

const getLongestWord = (sentence) =>
  sentence
    .split(' ')
    .sort((firstWord, nextWord) => nextWord.length - firstWord.length)[0];

console.log(
  getLongestWord('Antônio foi no banheiro e não sabemos o que aconteceu')
);
