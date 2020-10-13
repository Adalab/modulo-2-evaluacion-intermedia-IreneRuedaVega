'use strict';

//Variables
const number = document.querySelector(".js-number");
const btn = document.querySelector(".js-button");
const clue = document.querySelector(".js-clue");



//Function to get the random number
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const random = getRandomNumber(100);
console.log(`Mi número aleatorio es ${random}`);

clue.innerHTML = ' Escribe un número y dale a Prueba ';

//Function to check the number
function checkNumber(){
  let numberValue = number.value;
  numberValue = parseInt(numberValue);
  console.log(numberValue);
}

//event button 
btn.addEventListener("click", checkNumber);
