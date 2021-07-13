'use strict';

// Sets the initial score and shighscore
let score = 20;
let highscore = 0;
let randomNumber = magicNumber();
console.log(randomNumber);

// Generates a whole random number between one and twenty
function magicNumber() {
  let randomNumber = Math.trunc(Math.random() * 20) + 1;
  return randomNumber;
}
// Prints a message
const printMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// Updates and displays the value in Check Box
const checkBox = function (boxValue) {
  document.querySelector('.guess').value = boxValue;
};
// Updates and displays the score value
const scoreUpdate = function (score) {
  document.querySelector('.score').innerHTML = score;
};
// Updates the background color of the body
const updateBackground = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
// Updates and displays the random generated number
const updateNumberBox = function (number) {
  document.querySelector('.number').innerHTML = number;
};
const scoreInput = document.querySelector('#guess');

document.querySelector('.check').addEventListener('click', function () {
  // Select the player's input number
  let playerInput = Number(document.querySelector('.guess').value);
  // When player wins
  if (!playerInput || playerInput < 0 || playerInput > 20) {
    printMessage('⛔ Please enter a number between 1 and 20!');
    checkBox('');
  } else if (playerInput === randomNumber) {
    printMessage('Correct!');
    updateNumberBox(randomNumber);
    updateBackground('#60b347');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').innerHTML = highscore;
    }
  } else {
    score--;
    scoreUpdate(score);
    printMessage(playerInput > randomNumber ? 'Too High' : 'Too Low');
    if (score <= 0) {
      printMessage('💔 Try Again');
      scoreUpdate('0');
      updateBackground('#BF0A28');
      updateNumberBox(randomNumber);
    }
  }
});

// Resets game data without deleting the highscore
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNumber = magicNumber();
  updateBackground('#222');
  scoreUpdate(20);
  checkBox('');
  updateNumberBox('?');
});

/* const limitChars = function () {
  if (this.value.length > this.maxlength) {
    this.value = this.value.slice(0, this.maxlength);
  }
}; */

// Tracks user input and deletes invalid data
scoreInput.addEventListener('keyup', function (tecla) {
  if (tecla.keyCode === 189 || tecla.keyCode === 109) {
    scoreInput.value = '';
  } else if (scoreInput.value > 20 || scoreInput.value < 1) {
    scoreInput.value = '';
  }
});
