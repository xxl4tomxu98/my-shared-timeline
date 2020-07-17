import {Game} from './game.js';
import {GameJsonDeserializer} from './game-json-deserializer.js'
import {GameJsonSerializer} from './game-json-serializer.js'

let game = undefined;
const gameName = document.getElementById("game-name");
const clickTargets = document.getElementById("click-targets");

function updateUI() {

    let board = document.getElementById("board-holder");

    if (game === undefined) {
      board.classList.add("is-invisible");
    } else {
      board.classList.remove("is-invisible");
      gameName.innerHTML = game.getName();
    }

    if (game.turn === 1) {
      clickTargets.classList.add("red");
      clickTargets.classList.remove("black");
    } else {
      clickTargets.classList.add("black");
      clickTargets.classList.add("red");
    }

    for (let rowIndex = 0; rowIndex <= 5; rowIndex++) {
        for (let colIndex = 0; colIndex < 7; colIndex++) {

            let squareId = `square-${rowIndex}-${colIndex}`;
            let square = document.getElementById(squareId);

            square.innerHTML = '';

            let token = game.getTokenAt(rowIndex, colIndex);

            if(token === 1){
                let newToken = document.createElement('div');
                newToken.classList.add('token', 'red');
                square.appendChild(newToken);

            } else if (token === 2){
                let newToken = document.createElement('div');
                newToken.classList.add('token','black');
                square.appendChild(newToken);
            }

            let columnEle = document.getElementById(`column-${colIndex}`);
            if(game.isColumnFull(colIndex)){
              columnEle.classList.add("full");
            } else{
              columnEle.classList.remove("full");
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", event => {
  // if (game) {
  //   let gameStatus = game.loadData();
  //   if (gameStatus !== null) {
  //     updateUI();
  //   }
  // } else {
  //   game = new Game();
  //   let gameStatus = game.loadData();
  //   if (gameStatus !== null) {
  //     updateUI();
  //   }
  // }
  let newGame = document.getElementById("new-game");
  let name1 = document.getElementById("player-1-name");
  let name2 = document.getElementById("player-2-name");

  name1.addEventListener("keyup", event=>{
    enableNewGameBtn();
  });
  name2.addEventListener("keyup", event=>{
    enableNewGameBtn();
  });

  function enableNewGameBtn(){
    if(name1.value && name2.value){
      newGame.disabled = false;
    } else {
      newGame.disabled = true;
    }
  }

newGame.addEventListener("click", event=>{
    game = new Game(name1.value, name2.value);
    name1.value = '';
    name2.value = '';
    newGame.disabled = true;

    updateUI();
  });

clickTargets.addEventListener("click", (e) => {
    let targetId = e.target.id // column-5
    if (targetId.startsWith("column-")){
      let colIndex = Number.parseInt(targetId[targetId.length - 1]);
      game.playInColumn(colIndex);
      updateUI();
      let serializer = new GameJsonSerializer(game);
      localStorage.setItem('stored-data', serializer.serialize());
    }
  })
// debugger
  let storedData = localStorage.getItem('stored-data');
  if (storedData !== null) {
    let deserializer = new GameJsonDeserializer(storedData);
    game = deserializer.deserialize();
    updateUI();
  }
});
