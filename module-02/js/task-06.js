'use strict';
let input;
const numbers = [];
let total = 0;

function arraySum(numbers) {
  while (input !== null) {
    input = +prompt('Введите число:', '');
    if (isNaN(input)) break;
    for (var i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    console.log(total);
  }
  arraySum(numbers);
}

alert(`Общая сумма чисел равна ${total}`);
