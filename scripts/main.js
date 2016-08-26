var randomNumber = Math.floor(Math.random() * 100) + 1;

var guessField = document.querySelector(".guessField");
var submitGuess = document.querySelector(".submitGuess");

var resultAll = document.querySelectorAll(".result p");
var previousTries = document.querySelector(".previousTries");
var currentResult = document.querySelector(".currentResult");
var hint = document.querySelector(".hint");
var answer = document.querySelector(".answer");

var guessCount = 1;
var resetButton;
var win = false;


function checkGuess(){
  var guessValue = Number(guessField.value);

  if (guessCount === 1 )  {
    previousTries.textContent = 'Previous guesses : ';
  }
  previousTries.textContent += guessValue + ' ';
  
  if (guessValue === randomNumber){
    gameWin();
  } else if (guessCount === 10 ) {
    gameOver();
  } else {
    gameContinue(guessValue-randomNumber);
  }
  
}

submitGuess.addEventListener('click',checkGuess);

function gameWin(){
  currentResult.textContent = '!!!Congratulations!!!';
  currentResult.style.backgroundColor = "green";
  setGameOver();
}

function gameOver(){
  currentResult.textContent = '!!!Game Over!!!';
  currentResult.style.backgroundColor = "red";
  answer.textContent = 'The answer was ' + randomNumber;
  setGameOver();
}

function gameContinue(hintValue){
  currentResult.textContent = 'Wrong guess. Try again';
  currentResult.style.backgroundColor = "yellow";
  if (hintValue < 0) {
    hint.textContent = 'Too low';
  } else {
    hint.textContent = 'Too high';
  }
  guessCount++;
  guessField.value = '';
  guessField.focus();
}

function setGameOver(){
  guessField.disabled = true;
  submitGuess.disabled = true;

  for (i=0; i<resultAll.length; i++){
    resultAll[i].textContent = '';
    resultAll[i].style.backgroundColor = 'white';
  }
  
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start over';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click',resetGame);
}

function resetGame(){
  guessField.disabled = false;
  submitGuess.disabled = false;
  guessField.value = '';
  guessField.Focus();
  
  for (i=0; i<resultAll.length; i++){
    resultAll[i].textContent = '';
    resultAll[i].style.backgroundColor = 'white';
  }
  
  resetButton.parentNode.removeChild(resetChild);
  
  randomNumber = Math.floor(Math.random() * 100) + 1;
  
}
