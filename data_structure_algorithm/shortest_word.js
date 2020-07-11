//Shortest Word
//Write a function shortestWord that accepts a sentence as an argument.
//The function should return the shortest word in the sentence. If there
//is a tie, return the word that appears later in the sentence.

let shortestWord = function (sentence) {
  let words = sentence.split(' ');
  let shortest = words[0];
  words.forEach(function (word) {
    if (word.length <= shortest.length) {
      shortest = word;
    }
  });
  return shortest;
};

let shortestWord2 = function (sentence) {
  let words = sentence.split(' ');
  return words.reduce(function (acc, curr) {
    if (acc.length >= curr.length) {
      return curr;
    } else {
      return acc;
    }
  });
}

console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'
console.log(shortestWord2('what about today homework on mathplus or art on spanish'));
