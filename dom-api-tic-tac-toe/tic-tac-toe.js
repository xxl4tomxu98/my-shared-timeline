// without robot
//----------------------------------------------------------------------
let currentPlayerSymbol = "x";
const squareValues = ['', '', '', '', '', '', '', '', ''];
window.addEventListener('DOMContentLoaded', () =>{
  if(localStorage.length!==0){
    for(let i=0; i<localStorage.length; i++){
      key = localStorage.key(i);
      value = localStorage.getItem(key);
      squareValues[key] = value;
    }
    for(let i=0; i<squareValues.length; i++) {
      let currentSquare = document.getElementById(`square-${i}`);
      let storedValue = squareValues[i];
      if(storedValue !== '') {
        let player = document.createElement('img');
        player.src = `./player-${storedValue}.svg`;
        currentSquare.appendChild(player)
      }
    }
  }

  const square = document.getElementById("tic-tac-toe-board");
  let newGame = document.getElementById("new-game");

  newGame.addEventListener("click", e => {
    location.reload();
    for(let key in localStorage) {
      localStorage.removeItem(key);
    }
    newGame.setAttribute("disabled", "disabled");
    giveUp.removeAttribute("disabled");
  });
  let giveUp = document.getElementById("give-up");
  giveUp.addEventListener("click", e =>{
    let judge = document.getElementById("game-status");
    if(currentPlayerSymbol==="x"){
      judge.innerHTML = `player-o wins!`;
    } else {
      judge.innerHTML = `player-x wins!`;
    }
    giveUp.setAttribute("disabled", "disabled");
    newGame.removeAttribute('disabled');
  });

  square.addEventListener("click", event =>{
    let id = event.target.id;
    if(!id.includes("square-")) return;
    const squareIndex = Number.parseInt(id[id.length-1], 10);

    if(squareValues[squareIndex] !== '') return;
    const img = document.createElement('img');
    img.setAttribute("src", `./player-${currentPlayerSymbol}.svg`);
    event.target.appendChild(img);
    squareValues[squareIndex] = currentPlayerSymbol;
    localStorage.setItem(squareIndex, currentPlayerSymbol);
    checkGameStatus(squareValues, currentPlayerSymbol);
    if(currentPlayerSymbol==="x"){
      currentPlayerSymbol = "o";
    } else {
      currentPlayerSymbol = "x";
    }
  });

  function checkGameStatus(board, player){
    let judge = document.getElementById("game-status");
    if(board[0]===board[1]&&board[2]===board[1]&&board[1]===player  ||
       board[3]===board[4]&&board[4]===board[5]&&board[3]===player  ||
       board[6]===board[7]&&board[7]===board[8]&&board[6]===player  ||
       board[0]===board[3]&&board[3]===board[6]&&board[0]===player  ||
       board[1]===board[4]&&board[4]===board[7]&&board[1]===player  ||
       board[2]===board[5]&&board[5]===board[8]&&board[8]===player  ||
       board[0]===board[4]&&board[4]===board[8]&&board[0]===player  ||
       board[2]===board[4]&&board[6]===board[4]&&board[2]===player){
      judge.innerHTML = `player-${player} wins!`;
      newGame.removeAttribute('disabled');
    } else if(board.filter(item => item === "").length === 0) {
        judge.innerHTML = "It is a tie!";
        newGame.removeAttribute('disabled');
    } else {
        newGame.setAttribute("disabled", "disabled");
    }
  }
});


//-----------------------------------------------------------------

// BONUS robot
/* let currentPlayerSymbol = "x";
const squareValues = ['', '', '', '', '', '', '', '', ''];
window.addEventListener('DOMContentLoaded', () =>{
  if(localStorage.length!==0){
    for(let i=0; i<localStorage.length; i++){
      key = localStorage.key(i);
      squareValues[key] = localStorage.getItem(key);
    }
    for(let i=0; i<squareValues.length; i++) {
      let currentSquare = document.getElementById(`square-${i}`);
      let storedValue = squareValues[i];
      if(storedValue !== '') {
        let player = document.createElement('img');
        player.src = `./player-${storedValue}.svg`;
        currentSquare.appendChild(player)
      }
    }
  }

  const square = document.getElementById("tic-tac-toe-board");
  let newGame = document.getElementById("new-game");

  newGame.addEventListener("click", e => {
    location.reload();
    for(let key in localStorage) {
      console.log(key)
      localStorage.removeItem(key);
    }
    newGame.setAttribute("disabled", "disabled");
    giveUp.removeAttribute('disabled');
  });
  let giveUp = document.getElementById("give-up");
  giveUp.addEventListener("click", e =>{
    let judge = document.getElementById("game-status");
    if(currentPlayerSymbol==="x"){
      judge.innerHTML = `player-o wins!`;
    } else {
      judge.innerHTML = `player-x wins!`;
    }
    giveUp.setAttribute("disabled", "disabled");
    newGame.removeAttribute('disabled');
  });

  square.addEventListener("click", event =>{
    let id = event.target.id;
    if(!id.includes("square-")) return;
    const squareIndex = Number.parseInt(id[id.length-1], 10);
    //console.log(squareIndex);
    if(squareValues[squareIndex] !== '') return;
    const img = document.createElement('img');
    img.setAttribute("src", `./player-${currentPlayerSymbol}.svg`);
    event.target.appendChild(img);
    squareValues[squareIndex] = currentPlayerSymbol;
    localStorage.setItem(squareIndex, currentPlayerSymbol);
    checkGameStatus(squareValues, currentPlayerSymbol);
    if(currentPlayerSymbol==="x"){
       //currentPlayerSymbol = "o";
      robotSelection();
    } else {
      currentPlayerSymbol = "x";
    }
  });

  function robotSelection() {
    do{
      selection = Math.floor(Math.random()*9);
    } while(squareValues[selection]!=='');
    squareValues[selection] = 'o';
    let robotSymbol = document.createElement('img');
    robotSymbol.src = './player-o.svg';
    let currentSquare = document.getElementById(`square-${selection}`);
    currentSquare.appendChild(robotSymbol);
  }

  function checkGameStatus(board, player){
    let judge = document.getElementById("game-status");
    if(board[0]===board[1]&&board[0]===board[2]&&board[0]===player ||
      board[3]===board[4]&&board[3]===board[5]&&board[3]===player  ||
      board[6]===board[7]&&board[6]===board[8]&&board[6]===player  ||
      board[0]===board[3]&&board[3]===board[6]&&board[0]===player  ||
      board[1]===board[4]&&board[4]===board[7]&&board[1]===player  ||
      board[2]===board[5]&&board[5]===board[8]&&board[8]===player  ||
      board[0]===board[4]&&board[4]===board[8]&&board[0]===player  ||
      board[2]===board[4]&&board[6]===board[4]&&board[2]===player){
      judge.innerHTML = `player-${player} wins!`;
      newGame.removeAttribute('disabled');
    } else if(board.filter(item => item === "").length === 0) {
        judge.innerHTML = "It is a tie!";
        newGame.removeAttribute('disabled');
    } else {
        newGame.setAttribute("disabled", "disabled");
    }
  }
});
 */
