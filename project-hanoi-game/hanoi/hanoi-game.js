class HanoiGame {
  constructor(towers=[[3, 2, 1], [], []]) {
    this.towers = towers;
  }

  isValidMove(startTowerIdx, endTowerIdx) {

    if(this.towers[endTowerIdx]===undefined || this.towers[startTowerIdx]===undefined || this.towers[startTowerIdx].length===0 || startTowerIdx === endTowerIdx){
      return false;
    } else if (this.towers[endTowerIdx].length===0){
      return true;
    } else {
      const topStart =this.towers[startTowerIdx][this.towers[startTowerIdx].length-1];
      const topEnd = this.towers[endTowerIdx][this.towers[endTowerIdx].length-1];
      return topStart < topEnd;
    }

    // if(this.towers[startTowerIdx][this.towers[startTowerIdx].length-1] > this.towers[endTowerIdx][this.towers[endTowerIdx].length-1]) {
    //   return false;
    // }

    // if(startTowerIdx < endTowerIdx){
    //   return true;
    // }
  }

  move(startTowerIdx, endTowerIdx) {

    if(this.isValidMove(startTowerIdx, endTowerIdx)){
      let movingDisk = this.towers[startTowerIdx].pop();
      this.towers[endTowerIdx].push(movingDisk);
      return true;
    } else {
      return false;
    }
  }

  isWon() {
    if(this.towers[0].length===0 && this.towers[2].length===0 || this.towers[0].length===0 && this.towers[1].length===0) {
      return true;
    } else {
      return false;
    }
  }

  // the below methods are complete and do not need to be modified
  print() {
    // will print our board nicely to our user
    console.log(JSON.stringify(this.towers));
  }

  promptMove(reader, callback) {
    this.print();
    reader.question("Enter a starting tower: ", start => {
      const startTowerIdx = parseInt(start);
      reader.question("Enter an ending tower: ", end => {
        const endTowerIdx = parseInt(end);
        callback(startTowerIdx, endTowerIdx);
      });
    });
  }

  run(reader, callback) {
    // we will prompt our user to provide a start and stop index using
    // a readline interface
    this.promptMove(reader, (startTowerIdx, endTowerIdx) => {
      // if the move is invalid we tell the user
      if (!this.move(startTowerIdx, endTowerIdx)) {
        console.log("Invalid move!");
      }

      if (!this.isWon()) {
        // Continue to play!
        this.run(reader, callback);
      } else {
        this.print();
        console.log("You win!");
        callback();
      }
    });
  }
}

module.exports = HanoiGame;
