"use strict";

//Variables
const inputNumber = document.querySelector(".js-number");
const btn = document.querySelector(".js-button");
const messageClue = document.querySelector(".js-clue");
const numberOfAttempts = document.querySelector(".js-guess");

//Function to get the random number
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const random = getRandomNumber(100);
console.log(`Mi número aleatorio es ${random}`);

messageClue.innerHTML = " Escribe un número y dale a Prueba ";

//Function to check the number
function checkNumber() {
  let numberValue = inputNumber.value;
  numberValue = parseInt(numberValue);
  console.log(numberValue);
  if (numberValue >= 1 && numberValue <= 100) {
    if (random === numberValue) {
      printClue(" ¡Has ganado campeona! ");
    } else if (random < numberValue) {
      printClue(" Demasiado alto ");
    } else if (random > numberValue) {
      printClue(" Demasiado bajo ");
    }
  } else {
    messageClue.innerHTML = " El número debe estar entre 1 y 100 ";
  }
  checkAttempts();
}

function printClue(message) {
  messageClue.innerHTML = message;
}

let attempts = 0;

//Function to check the attempts
function checkAttempts() {
  attempts++;
  numberOfAttempts.innerHTML = attempts;
}

//event button
btn.addEventListener("click", checkNumber);
