"use strict";

// Declare variables
// Set Initial conditions
// Event Listner - Roll Dice Button
// Event Listner - Hold Button
// Event Listner - New Game (Reset to initial conditions)
// REfactoring CODE -
// 1. Create a Player change function
// 2. Set initial and new game conditions in a function
// The roll dice and Hold button should not work after any Player wins

// FEATURE 1
// Use user set max value to play the game

// FEATURE 2
// A modal window which will display the rules

// FEATURE 3
// Get Player names from user

// ---------------------------------------------------------------------------------

// Variables Declaration
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const current0El = document.querySelector(".current--0");
const current1El = document.querySelector(".current--1");
const diceEl = document.querySelector(".dice");
const scores0El = document.querySelector(".scores--0");
const scores1El = document.querySelector(".scores--1");
const btnRollEl = document.querySelector(".btn--roll");
const btnHoldEl = document.querySelector(".btn--hold");
const btnNewEl = document.querySelector(".btn--new");
const btnSetEl = document.querySelector(".btn--set");
const maxValue = document.querySelector(".set-number");
// const activePlayer = document.querySelector(".player--active");
let currentScore = 0;
let playing = true;

// Initial Conditions
let score = [0, 0];
let activePlayer = 0;
let userInput = 0;
// Function to reset the game
const init = function () {
  playing = true;
  maxValue.value = "";
  currentScore = 0;
  score = [0, 0];
  scores0El.textContent = 0;
  scores1El.textContent = 0;
  diceEl.classList.add("hidden");
  activePlayer = 0;
  player0El.classList.add("player-active");
  player1El.classList.remove("player-active");
  player0El.classList.remove("player-winner");
  player1El.classList.remove("player-winner");
};

init();

// Funtion - To switch Player
const switchPlayer = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;

  document.querySelector(`.current--${activePlayer}`).textContent =
    currentScore;
  player0El.classList.toggle("player-active");
  player1El.classList.toggle("player-active");
};

// -------------- FEATURE 1 -- User Input - Set the max winning value ----------------

btnSetEl.addEventListener("click", function () {
  userInput = maxValue.value;
  // console.log(userInput);
});

// -------------- EVENT LISTNER - ROLL DICE ----------------
btnRollEl.addEventListener("click", function () {
  if (playing) {
    // Generate a random number. Display the dice  per the number
    let diceRoll = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove("hidden");
    diceEl.src = `img/dice-${diceRoll}.png`;

    // Store it in a variable called 'currentScore'
    currentScore += diceRoll;

    // Display that number as the current score of active player
    // current0El.textContent = currentScore;
    document.querySelector(`.current--${activePlayer}`).textContent =
      currentScore;

    // If dice rolls 1
    if (diceRoll === 1) {
      // The current score of the active player will be 0
      currentScore = 0;
      document.querySelector(`.current--${activePlayer}`).textContent = 0;

      // The active player will change
      switchPlayer();
    }
  }
});

// -------------- EVENT LISTNER - HOLD SCORE ----------------
btnHoldEl.addEventListener("click", function () {
  if (playing) {
    // Store the current score of Active Player in Scores
    score[activePlayer] += currentScore;
    document.querySelector(`.scores--${activePlayer}`).textContent =
      score[activePlayer];

    // If the score is >= 100 then the active player wins
    if (score[activePlayer] >= userInput) {
      playing = false;
      document.querySelector(".player-active").classList.add("player-winner");
    } else {
      // Else the Plaerys will switch
      currentScore = 0;
      document.querySelector(`.current--${activePlayer}`).textContent = 0;

      // The active player will change
      switchPlayer();
    }
  }
});

// -------------- EVENT LISTNER - NEW GAME ----------------
btnNewEl.addEventListener("click", init);
