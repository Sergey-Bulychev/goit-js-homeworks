'use strict';
const checkForSpam = function (message) {
  words = message.split(' ');
  let answer;
  if (words.includes('spam' || 'sale')) {
    return (answer = true);
  } else {
    return (answer = false);
  }

  return answer;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
