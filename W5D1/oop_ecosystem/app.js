
// -------------------------------------------------------------
//               A Simple / Useless OOP Ecosystem
// -------------------------------------------------------------

// Define a class for the ecosystem of divs............................

class Ecosystem {
  constructor(names) {
    this.names = names;
    this.divsArr = []; // <---- Keeps track of what divs currently exist, like a game board.
  }

  // Creates a new div using one of the original input names...
  createDiv(name) {
    if (name) {
      const newDiv = new Div(name);
      this.divsArr.push(newDiv);
      console.log(`${name} appears!`)
    } else {
      const randName = names[Math.floor(Math.random() * names.length)];
      const newDiv = new Div(randName);
      this.divsArr.push(newDiv);
      console.log(`${randName} appears!`)
    }
  }

  // Updates the array where we keep track of the current divs...
  refreshDivsArr() {
    const updatedArr = [];
    this.divsArr.forEach(divInstance => {
      if (document.getElementById(divInstance.id)) {
        updatedArr.push(divInstance);
      }
    })
    this.divsArr = updatedArr;
    console.log(`current population: ${this.divsArr.length}`);
  }

  // Creates a new div by combining two divs that currently exist...
  crossCreate() {
    const divInstanceA = this.divsArr[Math.floor(Math.random() * this.divsArr.length)];
    const divInstanceB = this.divsArr[Math.floor(Math.random() * this.divsArr.length)];

    const nameA = divInstanceA.name;
    const nameB = divInstanceB.name;

    const newName = this.newName(nameA, nameB);
    this.createDiv(newName);

    console.log(`${nameA} and ${nameB} create: ${newName}`);
  }

  // A helper method that creates a new name by combining two input names...
  newName(nameA, nameB) {
    const coinFlip = Math.floor(Math.random() * 2);
    let nameChunkA;
    let nameChunkB;

    if (coinFlip === 0) {
      nameChunkA = nameA.slice(Math.floor(Math.random() * nameA.length) + 2);
      nameChunkB = nameB.slice(0, Math.floor(Math.random() * nameB.length) + 2);
    } else {
      nameChunkA = nameA.slice(0, Math.floor(Math.random() * nameA.length) + 2);
      nameChunkB = nameB.slice(Math.floor(Math.random() * nameB.length) + 2);
    }

    let nameCombo = nameChunkA + nameChunkB;
    return nameCombo[0].toUpperCase() + nameCombo.slice(1).toLowerCase();
  }

  // Initiates all the all the ongoing behavour of a new ecosystem...
  begin() {
    // Creates a random population set of starter divs...
    const randPopulation = Math.floor(Math.random() * 7) + 3;
    for (let i = 0; i < randPopulation; i++) {
      this.createDiv();
    }

    // Sets an interval every second / the pulse of the ecosystem instance...
    setInterval(() => {
      const randTime = Math.floor(Math.random() * 5000)

      // Sets an interval every second that will set a random timeout...
      setTimeout(() => {
        const rollDice = Math.floor(Math.random() * 10);
        if (rollDice === 0) {
          this.createDiv();
        } else {
          this.crossCreate()
        }
      }, randTime)

      // Updates the divs array / gets rid of any dead divs...
      this.refreshDivsArr();
    }, 1000);
  }
}


// Define the div class............................

class Div {
  // Takes only the name as input but randomly sets things like height, width etc...
  constructor(name) {
    this.name = name;
    this.id = Date().split("GMT")[0].split(" ").join("").split(":").join("").slice(3) + Math.floor(Math.random() * 1000);
    this.vibrateIndex = Math.floor(Math.random() * 3) + 1;
    this.width = Math.floor(Math.random() * 150) + 200;
    this.height = Math.floor(Math.random() * 150) + 200;
    this.xPosition = Math.random() * (window.innerWidth - this.width);
    this.yPosition = Math.random() * (window.innerHeight - this.height);
    this.opacity = 1;
    this.self = this.createSelf();
  }

  // Puts together and adds a new dom element with this instances name, height etc...
  createSelf() {
    // Create new div, set it's style then add to the dom...
    let self = document.createElement("div");
    self.style.height = `${this.height}px`;
    self.style.width = `${this.width}px`;
    self.style.border = `1px solid #fff`;
    self.style.marginLeft = `${this.xPosition}px`;
    self.style.marginTop = `${this.yPosition}px`;

    // Sets internal text of the div element so the names and ids are visible...
    const idPTag = document.createElement("p");
    const namePTag = document.createElement("p");
    idPTag.innerHTML = `id: ${this.id}`;
    namePTag.innerHTML = `name: ${this.name}`;

    self.appendChild(idPTag);
    self.appendChild(namePTag);

    self.setAttribute("id", this.id);

    // Appends the new div element to the body...
    let body = document.querySelector("body");
    body.appendChild(self);

    self.style.opacity = `0`;

    // Just for style. Fades out div one setTimeout style change at a time...
    setTimeout(() => { self.style.opacity = `${.2 * this.opacity}`; }, 100);
    setTimeout(() => { self.style.opacity = `${.4 * this.opacity}`; }, 150);
    setTimeout(() => { self.style.opacity = `${.6 * this.opacity}`; }, 200);
    setTimeout(() => { self.style.opacity = `${.8 * this.opacity}`; }, 250);
    setTimeout(() => { self.style.opacity = `${1 * this.opacity}`; }, 300);

    this.startVibrate(self);
    this.setDeath(self);

    return self;
  }

  // This is just for style, making everthing vibrate...
  startVibrate(ele) {
    setInterval(() => {
      const xVibrate = ((this.vibrateIndex / 2) - Math.random() * this.vibrateIndex);
      const yVibrate = ((this.vibrateIndex / 2) - Math.random() * this.vibrateIndex);

      ele.style.marginLeft = `${xVibrate + this.xPosition}px`
      ele.style.marginTop = `${yVibrate + this.yPosition}px`
    }, 50)
  }

  // Responsible for setting a timeout that will remove a div after a random amount of time...
  setDeath(ele) {
    const lifeSpan = Math.floor(Math.random() * 10000) + 3000;
    let self = document.getElementById(this.id)

    // Just for style. Fades in div one setTimeout style change at a time...
    setTimeout(() => { self.style.opacity = `${.2 * this.opacity}`; }, lifeSpan - 100);
    setTimeout(() => { self.style.opacity = `${.4 * this.opacity}`; }, lifeSpan - 150);
    setTimeout(() => { self.style.opacity = `${.6 * this.opacity}`; }, lifeSpan - 200);
    setTimeout(() => { self.style.opacity = `${.8 * this.opacity}`; }, lifeSpan - 250);
    setTimeout(() => { self.style.opacity = `${1 * this.opacity}`; }, lifeSpan - 300);

    setTimeout(() => {
      console.log(`${this.name} removed!`)
      ele.parentNode.removeChild(self);
    }, lifeSpan)
  }
}



// Make some sample input names and start a new ecosystem instance............................

const names = ["Julie", "Angela", "Alissa", "Corina", "Tom", "Aaron", "Adam", "Alijaan", "Ammar", "Andrea", "Andrew", "Benjamin", "Bonnie", "Camille", "Clayton", "Cynthia", "Daniel", "Daniel", "Daniel", "David", "Eric", "Erin", "Ivan", "Jaron", "Jeff", "Jhonathan", "John", "Jony", "Juliet", "Kasey", "Kathleen", "Matthew", "Miah", "Michael", "Miguel", "Mohammad", "Peter", "Philip", "Quynn", "Rafael", "Robert", "Ronald", "Ryan", "Ryan", "Samuel", "Thomas", "Wen", "Yihui", "Yongho", "Robin"]

let newEcosystem = new Ecosystem(names);
newEcosystem.begin();
