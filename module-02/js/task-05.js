'use strict';
// const checkForSpam = function (message) {
//   words = message;

//   if (
//     words.includes('spam'.toLowerCase()) ||
//     words.includes('sale'.toLowerCase())
//   ) {
//     return true;
//   } else {
//     false;
//   }

//   return (
//     words.includes('spam'.toLowerCase()) || words.includes('sale'.toLowerCase())
//   );
// };
const checkForSpam = str => {
  const source = str.toLowerCase();
  return source.includes('spam') || source.includes('sale');
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
