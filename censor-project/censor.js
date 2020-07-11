const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const fs = require('fs');

/* let isVowel = (function() {
  let re = /^[aeiou]$/i;
  return function(s) {
    return re.test(s);
  }
})(); */

const starVowels = string => string.split(/[aeiou]/i).join('*');

//const forbiddenArray = ["potato", "tomato", "cat", "strange", "real", "park"];

//This function will call starVowels function when the word is in dictionary
const censorSentence = (sentence, strings) => {
  let arr = sentence.split(' ');
  let newArray = arr.map(word => {
    if (strings.includes(word.toLowerCase())) {
      return starVowels(word);
    }
    return word;
  });
  return newArray.join(" ");
}

const askUser = rl.question("Enter a sentence to be censored: ", sentence => {
  rl.question("Enter a path to a dictionary: ", pathname => {
    fs.readFile(pathname, "utf8", (err, data) => {
      if (err) {
        console.log(err);
      }
      //console.log(data.split('\r\n'));
      // The regex will take out line break \n and carriage return \r in the dictionary
      let forbiddenArray = data.split(/[\r\n]/);
      console.log('-' + censorSentence(sentence, forbiddenArray) + '-');
    });
    rl.close();
  })
});
