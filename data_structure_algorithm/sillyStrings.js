//Silly Strings
//Write a function sillyString that accepts a word as an argument.
//The functions should return a new word where every vowel of the
//original word is followed by 'b' and that same vowel.
//For example, 'siren' would turn into 'sibireben'.

function sillyString(word) {
  let vowels = 'aeiouAEIOU';

  let word2 = [];
  let index = [];
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (vowels.includes(char)) {
      index.push(i);
    }
  }
  word2.push(word.slice(0, index[0] + 1));
  word2.push('b');
  word2.push(word[index[0]]);

  for (let j = 1; j < index.length; j++) {
    word2.push(word.slice(index[j - 1] + 1, index[j] + 1));
    word2.push('b');
    word2.push(word[index[j]]);
  }
  word2.push(word.slice(index[index.length - 1] + 1));

  return word2.join('');
}

let sillyString2 = function (word) {
  let vowels = "aeiou";
  let newWord = "";
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (vowels.includes(char)) {
      newWord += char + "b" + char;
    } else {
      newWord += char;
    }
  }
  return newWord;
};

console.log(sillyString('stop'));       // stobop
console.log(sillyString('that'));       // thabat
console.log(sillyString('can'));        // caban
console.log(sillyString('cats'));       // cabats
console.log(sillyString('italy'));      // ibitabaly
console.log(sillyString('scooter'));    // scobooboteber
console.log(sillyString2('magnificent'));
