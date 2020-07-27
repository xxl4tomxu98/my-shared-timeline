class Animal {
    constructor(name) {
        this.name = name;
    }

    makeNoise() {
        console.log(this.noise);
    }

    makeMove() {
        console.log(this.move);
    }
}

class Horse extends Animal {
    constructor(name){
        super(name);
        this.noise = "Neigh";
        this.move = "Gallop";
    }
}

class Pig extends Animal {
    constructor(name) {
        super(name);
        this.noise = "Oink";
        this.move = "Trot";
    }
}

export default class Dog extends Animal {
    constructor(name) {
        super(name);
        this.noise = "Bark";
        this.move = "run";
    }
}

// // Lets make more animals 
// let clover = new Horse("clover");
// let snowball = new Pig("pig");
// let jessie = new Dog("jessie");

// // Lets make them speak / move:
// clover.makeNoise();
// snowball.makeMove();
// jessie.makeNoise();
// jessie.makeMove();

// Notice the difference in this refactor. Do you see the polymorphism?

// w5d4 ======= :

// How do we export these using >> ES6 << syntax?
exports.Dog = Dog;
// {
//     Dog, 
//     Pig, 
//     Horse
// };

