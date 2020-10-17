"use strict";

//Variables
const number = document.querySelector(".js-number");
const btn = document.querySelector(".js-button");
const clue = document.querySelector(".js-clue");
const guess = document.querySelector(".js-guess");

//Function to get the random number
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const random = getRandomNumber(100);
console.log(`Mi número aleatorio es ${random}`);

clue.innerHTML = " Escribe un número y dale a Prueba ";

//Function to check the number
function checkNumber() {
  let numberValue = number.value;
  numberValue = parseInt(numberValue);
  console.log(numberValue);
  if (numberValue >= 1 && numberValue <= 100) {
    if (random === numberValue) {
      clue.innerHTML = " ¡Has ganado campeona! ";
    } else if (random < numberValue) {
      clue.innerHTML = " Demasiado alto ";
    } else if (random > numberValue) {
      clue.innerHTML = " Demasiado bajo ";
    }
  } else {
    clue.innerHTML = " El número debe estar entre 1 y 100 ";
  }
  checkAttempts();
}

let attempts = 0;

//Function to check the attempts
function checkAttempts() {
  attempts++;
  guess.innerHTML = attempts;
}

//event button
btn.addEventListener("click", checkNumber);
