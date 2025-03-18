'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector(
//   '.message'
// ).textContent = `🧡 Yay your number is correct!`;

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 15;

// document.querySelector('.guess').value = 23;

//actual work

//! this is a fn for display message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let no = Math.trunc(Math.random() * 10 + 1); //trunc help to get whole number
let score = 20;
let highscore = 0;
// document.querySelector('.number').textContent = no;

//! guessing the number button

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //no number included
  if (!guess) {
    displayMessage(`Enter the Number First `);
  }

  // congrats guessed no.
  else if (guess === no) {
    displayMessage('Congrats  you guessed it right');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = no;
  }

  //! higher no. or lesser no. (using leteral operator)
  else if (guess !== no) {
    displayMessage(guess > no ? `It's higher` : `It's lower`);
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('Game Over');
    document.querySelector('.score').textContent = 0;
  }
});

//! again button

document.querySelector('.again').addEventListener('click', function () {
  no = Math.trunc(Math.random() * 10 + 1);
  score = 20;
  document.querySelector('.number').textContent = no;
  displayMessage(`Start guessing...`);
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  // document.querySelector('.number').textContent = no;
});
