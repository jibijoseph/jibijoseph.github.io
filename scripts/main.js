var randomNumber = Math.floor( Math.random() * 100 ) + 1;

var guessTries = document.querySelector(".guessTries");
var guessResult = document.querySelector(".guessResult");
var answer = document.querySelector(".answer");
var hint = document.querySelector(".hint");

var guessSubmit = document.querySelector(".guessSubmit");
var guessField = document.querySelector(".gueussField");

var guessCount = 1;
var resetButton;
var win = false;

function checkGuess(){
  var userGuess = Number(guessField.value);
  
  if (guessCount === 1) {
    guessTries.textContent = 'Previous Guesses: ';
  }
  
  guessTries += userGuess + ' ';
  
  if (userGuess === randomNumber){
    guessResult.textConent = "Congratulations you win!!!";
    guessResult.style.backgroundColor = 'green';
    win = true.
    setGameOver();
  } else {
    guessResult.textContent = "Wrong!";
    guessResult.style.backgroundColor = 'red';
    if (userGuess < randomNumber ){
      hint.textContent = 'Too low';
    }
    else if (userGuess > randomNumber ){
      hint.textContent = 'Too high';
    }
  }
  
  if (guessTries === 10) {
    setGameOver();
  }
  
  guessTries++;
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click',checkGuess);

function setGameOver(){
  guessField.disabled = true;
  guessSubmit.disabled = true;
  if (win === false) {
    answer.textContent = 'The right answer was ' + randomNumber;
  }
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click',resetGame);
}

function resetGame(){
  guessCount = 1;
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  
  var resetParas = document.querySelectorAll('.result', p);
  for (var i=0; i<resetParas.length(); i++ ){
    resetParas[i].textContent = '';
  }
  
  resetButton.parentNode.removeChild(resetButton);
  
  result.style.backgroundColor = 'white';
  guessField.focus();
}
