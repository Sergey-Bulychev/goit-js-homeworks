'use strict';
import users from './users.js';
const getUsersWithEyeColor = (arr => arr.filter(user => user.eyeColor === 'blue'));
// твой код

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
