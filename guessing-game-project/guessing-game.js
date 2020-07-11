const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  //The maximum and the minimum are inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function randomInRange(min, max) {
  return getRandomInt(min, max);
}


let checkGuess = function (num, secretNumber) {
  if (num > secretNumber) {
    console.log('Too high')
    return false;
  }
  if (num < secretNumber) {
    console.log('Too low')
    return false;
  }
  if (num === secretNumber) {
    console.log('Correct')
    return true;
  }
};

let askLimit = function () {
  rl.question('Enter the number of guess limit: ', (limit) => {
    let limit1 = Number(limit);
    console.log("So the maximum number you can guess is " + limit + " times.");
    let askRange = function () {
      rl.question('Enter a maximum number: ', max => {
        rl.question('Enter a minimum number: ', min => {
          console.log("The range of your guess shall be between " + min + ' and ' + max);
          let secretNumber = randomInRange(Number(min), Number(max));
          let askGuess = function () {
            rl.question('Enter a guess: ', (answer) => {
              let ask = checkGuess(Number(answer), secretNumber);
              console.log(`Thank you for your input: ${answer}`);
              limit1--;
              if (limit1 !== 0) {
                if (ask) {
                  console.log('You win');
                  rl.close();
                } else {
                  askGuess();
                }
              } else {
                console.log('You lose, guessing limit reached');
                rl.close();
              }
            });
          };
          askGuess();
        });
      });
    };
    askRange();
  });
};
askLimit();
