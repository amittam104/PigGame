"use strict";

// Declare variables
// Set Initial conditions
// Event Listner - Roll Dice Button
// Event Listner - Hold Button
// Event Listner - New Game (Reset to initial conditions)

// FEATURE 1
// Use user set max value to play the game

// FEATURE 2
// A modal window which will display the rules

// FEATURE 3
// Get Player names from user

// ---------------------------------------------------------------------------------

// Variables Declaration
const current0El = document.querySelector(".current--0");
const current1El = document.querySelector(".current--1");
const diceEl = document.querySelector(".dice");
const scores0El = document.querySelector(".scores--0");
const scores1El = document.querySelector(".scores--1");
const btnRollEl = document.querySelector(".btn--roll");
let currentScore = 0;

// Initial Conditions
scores0El.textContent = 0;
scores1El.textContent = 0;
diceEl.classList.add("hidden");

// Event Listner - Roll Dice
btnRollEl.addEventListener("click", function () {
  // Generate a random number. Display the dice  per the number
  let diceRoll = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove("hidden");
  diceEl.src = `img/dice-${diceRoll}.png`;

  // Store it in a variable called 'currentScore'
  currentScore += diceRoll;

  // Display that number as the current score of active player
  current0El.textContent = currentScore;
});
