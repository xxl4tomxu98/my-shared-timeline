// METHOD #1
// const classes = require('./classes');

// console.log(classes);

// const Dog = classes.Dog;
// const Cat = classes.Cat;





// METHOD #2

// const { Dog, Cat } = require('./classes')









// SEPARATE FILES

const Cat = require('./cat');
const Dog = require('./dog');



let pancake = new Dog('pancake', 5);
let bob = new Cat('bob', 12);

console.log(pancake.sayHello());
console.log(bob.meow());