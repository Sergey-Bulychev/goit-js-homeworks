'use strict';
let input;
const numbers = [];
let total = 0;
while (input !== null) {
  input = +prompt('Введите число:', '');
  if (isNaN(input)) break;
  total += input;
}
alert(`Общая сумма чисел равна ${total}`);
