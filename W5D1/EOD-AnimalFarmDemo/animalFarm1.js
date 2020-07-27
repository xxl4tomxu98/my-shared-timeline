
class Horse {
    constructor(name, move) {
        this.name = name; 
        this.move = move; 
    }

    gallop(){
        console.log(this.move);
    }

    neighs(){
        console.log("neighhhhhh");
    }
}

class Pig {
    constructor(name, move) {
        this.name = name;
        this.move = move;
    }

    trots() {
        console.log(this.move);
    }

    oinks(){
        console.log("Oink, oink!");
    }
}

class Dog {
    constructor(name, move) {
        this.name = name;
        this.move = move;
    }
    
    run() {
        console.log(this.move);
    }

    barks(){
        console.log("Woof! woof woof woof. Woof!");
    }
}
// Lets make some Horses, Dogs, and Pigs:
const bob = new Horse("Bob The Horse", "trot");
const pinky = new Pig("Pinky", "trot");
const jessie = new Dog("Jessie", "run");

// Lets make our instances speak:
bob.neighs();
pinky.neighs();
jessie.barks();

// How do we refactor all of the above to use inheritance and polymorphism?