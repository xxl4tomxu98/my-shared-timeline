/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
the scorer (string) and a point value (number). `countScores(people)` should
return an object that has key-value pairs listing each person who scored as a key
and the sum of the total points for the game as their value.


Example 1:
let ppl = [{name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];

console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }

Example 2:
let peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }

Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
the scorer (string) and a point value (number). `countScores(people)` should
return an object that has key-value pairs listing each person who scored as a key
and the sum of the total points for the game as their value.

***********************************************************************/

function countScores(people) {
  // your code here
  let count = {};
  let arrNames = [];

  for (let i = 0; i < people.length; i++) {
    if (!arrNames.includes(people[i].name)) {
      arrNames.push(people[i].name);
    }
  }
  console.log(arrNames);

  for (let i = 0; i < people.length; i++) {
    for (let j = 0; j < arrNames.length; j++) {
      if (people[i].name === arrNames[j]) {
        console.log(arrNames[j]);
        if (arrNames[j] in count) {
          count[arrNames[j]] += people[i].score;
        } else {
          count[arrNames[j]] = people[i].score;
        }
      }
    }
  }
  return count;
}

function countScores2(people) {
  let count = {};
  for (let i = 0; i < people.length; i++) {
    let playerObj = people[i];
    let playerName = playerObj.name;
    let playerScore = playerObj.score;
    if (playerName in count) {
      count[playerName] += playerScore;
    } else {
      count[playerName] = playerScore;
    }
  }
  return count;
}



let peeps = [
  { name: "Anthony", score: 2 },
  { name: "Winnie", score: 2 },
  { name: "Fred", score: 2 },
  { name: "Winnie", score: 2 },
  { name: "Fred", score: 2 },
  { name: "Anthony", score: 2 },
  { name: "Winnie", score: 2 }
];
console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }
console.log(countScores2(peeps));
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countScores;
