'use strict';
import users from './users.js';
const calculateTotalBalance = (arr => arr.reduce(
  (totalBalance, user) => totalBalance + user.balance,
  0,
));
// твой код
console.log(calculateTotalBalance(users)); // 20916
