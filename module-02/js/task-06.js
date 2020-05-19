'use strict';
const No_Number = 'Было введено не число, попробуйте еще раз';
let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt('Введите число:', 0);
  if (input === null) break;
  const userNumber = +input;
  if (Number.isNaN(userNumber)) {
    alert(No_Number);
  } else {
    numbers.push(userNumber);
  }
}
if (numbers.length > 0) {
  for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
}
const message = `Общая сумма равна ${total}`;
