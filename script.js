'use strict';

/*
console.log(document.querySelector('.message').textContent);
//DOM: Document Object Model
//connection between html and JS
document.querySelector('.message').textContent = 'Correct Number😳';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 11;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//Handling Click Events
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number 😢';
  }
  // when a plauer means
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number😳';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347'; //modifying the css styles
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //modifying the width
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high ❤️!';
      score = score - 1;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game';
    }
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low 😒';
      document.querySelector('.score').textContent = score;
      score = score - 1;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start Guessing....';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222'; //modifying the css styles
  document.querySelector('.number').style.width = '15rem';
});
