const fruits = ['banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple'];

//1. Remove duplicates from an array
// First method
const uniqueFruits = Array.from(new Set(fruits));
console.log(uniqueFruits); // returns [“banana”, “apple”, “orange”, “watermelon”, “grape”]
// Second method
const uniqueFruits2 = [...new Set(fruits)];
console.log(uniqueFruits2); // returns [“banana”, “apple”, “orange”, “watermelon”, “grape”]

//2. Replace the specific value in an array
fruits.splice(0, 2, 'potato', 'tomato');
console.log(fruits); // returns [“potato”, “tomato”, “orange”, “watermelon”, “apple”, “orange”, “grape”, “apple”]

//3. Map array without .map()

let friends = [
  { name: 'John', age: 22 },
  { name: 'Peter', age: 23 },
  { name: 'Mark', age: 24 },
  { name: 'Maria', age: 22 },
  { name: 'Monica', age: 21 },
  { name: 'Martha', age: 19 },
]


let friendsNames = Array.from(friends, ({name}) => name);
console.log(friendsNames); // returns [“John”, “Peter”, “Mark”, “Maria”, “Monica”, “Martha”]

//4.empty an array

fruits.length = 0;
console.log(fruits); // returns []

//5. Convert array to an object

let fruits1 = ['banana', 'apple', 'orange', 'watermelon'];
let fruitsObj = { ...fruits1 };
console.log(fruitsObj); // returns {0: “banana”, 1: “apple”, 2: “orange”, 3: “watermelon”, 4: “apple”, 5: “orange”, 6: “grape”, 7: “apple”}

//6. fill array with data
let newArray = new Array(10).fill('1');
console.log(newArray); // returns [“1”, “1”, “1”, “1”, “1”, “1”, “1”, “1”, “1”, “1”, “1”]

//7. merge arrays

let fruits2 = ['apple', 'banana', 'orange'];
let meat = ['poultry', 'beef', 'fish'];
let vegetables = ['potato', 'tomato', 'cucumber'];
let food = [...fruits2, ...meat, ...vegetables];
console.log(food); // [“apple”, “banana”, “orange”, “poultry”, “beef”, “fish”, “potato”, “tomato”, “cucumber”]

//8. find the intersection of twp arrays

let numOne = [0, 2, 4, 6, 8, 8];
let numTwo = [1, 2, 3, 4, 5, 6];
let duplicatedValues = [...new Set(numOne)].filter(item => numTwo.includes(item));
console.log(duplicatedValues); // returns [2, 4, 6]

//9 remove falsy values from an array

let mixedArr = [0, 'blue', '', NaN, 9, true, undefined, 'white', false];
let trueArr = mixedArr.filter(Boolean);
console.log(trueArr); // returns [“blue”, 9, true, “white”]

//10 get randon values from an array

let colors = ['blue', 'white', 'green', 'navy', 'pink', 'purple', 'orange', 'yellow', 'black', 'brown'];
let randomColor = colors[(Math.floor(Math.random() * (colors.length)))]

//11. reverse an array

let reversedColors = colors.reverse();
console.log(reversedColors); // returns [“brown”, “black”, “yellow”, “orange”, “purple”, “pink”, “navy”, “green”, “white”, “blue”]

//12. last index of an array
let nums = [1, 5, 2, 6, 3, 5, 2, 3, 6, 5, 2, 7];
let lastIndex = nums.lastIndexOf(5);
console.log(lastIndex); // returns 9

//13. summation of all values in the array
var nums2 = [1, 5, 2, 6];
var sum = nums.reduce((x, y) => x + y);
console.log(sum); // returns 14
