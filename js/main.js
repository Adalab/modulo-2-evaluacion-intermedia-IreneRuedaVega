'use strict';

//Constantes
const number = document.querySelector(".js-number");
const btn = document.querySelector(".js-button");

//Función número random
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const random = getRandomNumber(100);
console.log(`Mi número aleatorio es ${random}`);

