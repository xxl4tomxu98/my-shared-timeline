import {getClue as getClueFromCallback} from "./callback-version.js";
import {getClue as getClueFromPromise} from "./promise-version.js";
import {getClue as getClueFromAsyncFunction} from "./async-await-version.js";

function setHtmlFromApi(clue){
  let quest = document.getElementById('question');
  let ans = document.getElementById('answer');
  ans.classList.add("is-hidden");
  let value = document.getElementById('value');
  let catTitle = document.getElementById('category-title');
  let invalidCount = document.getElementById('invalid-count');
  quest.innerHTML = clue.question;
  ans.innerHTML = clue.answer;
  value.innerHTML = clue.value;
  catTitle.innerHTML = clue.category.title;
  if (clue.invalid_count && clue.invalid_count>0)  {
    invalidCount.innerHTML = "invalid";
  } else {
    invalidCount.innerHTML = "valid";
  }
}

const callBackBtn = document.getElementById('use-callback');
callBackBtn.addEventListener('click', getClueFromCallback((err, clue) => {
    if(err!==null) {
        console.error(err);
    } else {
        setHtmlFromApi(clue);
    }
  })
)

const promiseBtn = document.getElementById('use-promise');

promiseBtn.addEventListener('click', () => {
  getClueFromPromise().then(clue => {
     setHtmlFromApi(clue);
    }).catch(err => console.error(err.message))
})



const asyncBtn = document.getElementById('use-async-await');
asyncBtn.addEventListener('click', async() => {
  try {
    const clue = await getClueFromAsyncFunction();
      setHtmlFromApi(clue);
  }  catch (err) {
      console.error(err.message);
  }
});

const checkResponse = document.getElementById("check-response");
const userInput = document.getElementById("player-response");
const officialAns = document.getElementById("answer");
let score = document.getElementById("score");
let value = document.getElementById("value");
let playerScore = 0;
checkResponse.addEventListener("click", (event) => {

  if(officialAns.innerHTML.trim()===userInput.value.trim()){
    playerScore += Number(value.innerHTML);
  } else {
    playerScore -= Number(value.innerHTML);
  }
  score.innerHTML = playerScore;
  officialAns.classList.remove("is-hidden");
  checkResponse.classList.add("is-hidden");
})

const board = document.getElementById("game-board");
board.addEventListener("click", (event) =>{
  checkResponse.classList.remove("is-hidden");
  userInput.innerHTML = '';
})
