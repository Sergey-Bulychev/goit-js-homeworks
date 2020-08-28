'use strict';
import users from './users.js';
const getUserWithEmail = (user, email) => user.find(x => x.email === email);
// твой код

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
