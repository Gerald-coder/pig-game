'use strict';

// // SELECTING ELEMENTS
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
// mine
const player1El = document.querySelector('.player--1');
const player0El = document.querySelector('.player--0');

const scores = [0, 0];
let currentScore = 0;

// // switch player function
function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

// // STARTING CONDITIONS
score0El.textContent = 0;
score1El.textContent = 0;
let activePlayer = 0;
diceEl.classList.add('hidden');

// // event handlers
btnRoll.addEventListener('click', () => {
  // // 1. generate number
  const dice = Math.trunc(Math.random() * 6) + 1;

  // // 2. display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `images/dice-${dice}.png`;

  // // 3. check if dice is not 1
  if (dice !== 1) {
    // // add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // if 1, switch player
    switchPlayer();
  }
});

// // holding scores
btnHold.addEventListener('click', () => {
  // 1. add current score to active players score
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  // 2. check if players score >=100, then finish the game
  if (scores[activePlayer] >= 20) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    // 3. switch to next player
    switchPlayer();
  }
});
