'use strict';
const counterValue = document.querySelector('#value');
const increment = document.querySelector('button[data-action="increment"]');
const decrement = document.querySelector('button[data-action="decrement"]');

const increment1 = counterValue =>
  (counterValue.textContent = Number.parseInt(counterValue.textContent) + 1);
const decrement1 = counterValue =>
  (counterValue.textContent = Number.parseInt(counterValue.textContent) - 1);

increment.addEventListener('click', () => increment1(counterValue));
decrement.addEventListener('click', () => decrement1(counterValue));
