// without robot
//----------------------------------------------------------------------
/* let currentPlayerSymbol = "x";
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
}); */


//-----------------------------------------------------------------

// BONUS robot
let currentPlayerSymbol = "x";
const squareValues = ['', '', '', '', '', '', '', '', ''];
window.addEventListener('DOMContentLoaded', () =>{
  //load the stored data into the squareValues array when page refreshed
  if(localStorage.length!==0){
    for(let i=0; i<localStorage.length; i++){
      key = localStorage.key(i);
      squareValues[key] = localStorage.getItem(key);
    }
    // the array info is then loaded onto the board
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
  let giveUp = document.getElementById("give-up");

  newGame.addEventListener("click", e => {
    //reload the page when newGame button is hit
    location.reload();
    for(let key in localStorage) {
      console.log(key)
      //cleanup the storage when newGame starts
      localStorage.removeItem(key);
    }
    newGame.setAttribute("disabled", "disabled");
    giveUp.removeAttribute('disabled');
  });

  giveUp.addEventListener("click", e =>{
    let judge = document.getElementById("game-status");
    if(currentPlayerSymbol==="x"){
      judge.innerHTML = `player-o wins!`;
    } else {
      judge.innerHTML = `player-x wins!`;
    }
    //flip the buttons when giveUp button hits
    giveUp.setAttribute("disabled", "disabled");
    newGame.removeAttribute('disabled');
  });

  square.addEventListener("click", event =>{
    let id = event.target.id;
    //has to put pieces onto the squares
    if(!id.includes("square-")) return;
    const squareIndex = Number.parseInt(id[id.length-1], 10);
    //console.log(squareIndex);
    //nonempty squares are not allowed
    if(squareValues[squareIndex] !== '') return;
    const img = document.createElement('img');
    img.setAttribute("src", `./player-${currentPlayerSymbol}.svg`);
    event.target.appendChild(img);
    squareValues[squareIndex] = currentPlayerSymbol;
    localStorage.setItem(squareIndex, currentPlayerSymbol);
    checkGameStatus(squareValues, currentPlayerSymbol);
    if(currentPlayerSymbol==="x"){
      //currentPlayerSymbol = "o";
      //assuming robot always use symbol "o"
      robotSelection();
    } else {
      currentPlayerSymbol = "x";
    }

  });





  function robot(){
    let selection = Math.floor(Math.random()*9);
    for(let i=0;i<9;i++){
      if(squareValues[selection]===''){
        return selection;
      }
      //if random num is not empty, shift 1 spot and check
      selection=(selection + 1)%9;
    }
  }

  function robotRecurse(){
    let selection = Math.floor(Math.random()*9);
    if(squareValues[selection]===''){
      return selection;
    }
    //first random index not empty, then recursively find empty one
    return robotRecurse();
  }



  function robotSelector(){
    //simple random number as index
    do{
      selection = Math.floor(Math.random()*9);
    } while(squareValues[selection]!=='');
    return selection;
  }

  function robotSelection() {
    //let selection = robotRecurse();
    //let selection = robotSelector();
    let selection = robot();

    let robotSymbol = document.createElement('img');
    robotSymbol.src = './player-o.svg';
    squareValues[selection] = 'o';
    let currentSquare = document.getElementById(`square-${selection}`);
    currentSquare.appendChild(robotSymbol);
    //checkGameStatus(squareValues, robotSymbol);
    //currentPlayerSymbol = "x";
    // return currentPlayerSymbol;
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
