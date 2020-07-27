// import the Animal Classes using >> ES6 << syntax

// import /* */ from /**/;
import { Dog, Pig, Horse } from './animalFarm2.js';


// Lets make more animals 
let clover = new Horse("clover");
let snowball = new Pig("pig");
let jessie = new Dog("jessie");

// Lets make them speak / move:
clover.makeNoise();
snowball.makeMove();
jessie.makeNoise();
jessie.makeMove();

