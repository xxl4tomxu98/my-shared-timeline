/* two functions, `move` and `makeNoise` */

const move = function(name, animalType) {
    let verb;
    switch (animalType) {
        case "horse":
            verb = "Gallops";
        case "pig":
            verb = "Trots";
        case "dog":
            verb = "Runs";
    }

    return `${name} ${verb}.`;
};

// "Bob Gallops"
move("Bob", "horse");

const makeNoise = function (name, animalType) {
    let noise;
    switch (animalType) {
        case "horse":
            noise = "Neeeeiiiiighhhhh";
        case "pig":
            noise = "oinkoinkoink";
        case "dog":
            noise = "woofwoofwoof";
    }

    return `${name} ${noise}.`;
};
// make an animal class, use instance methods, like make noise, etc. 

// Lets make a horse move:

// Lets make a dog named Jessie make noise:
makeNoise("Jessie", "dog");