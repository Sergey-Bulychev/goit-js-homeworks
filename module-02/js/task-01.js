'use strict';
const logItems = function (array) {
  for (let i = 0; i < array.length; i++) {
    const arr = array[i];
    const keyArr = i + 1;
    console.log(keyArr, arr);
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
