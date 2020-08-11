'use strict';
import users from './users.js';
const getUsersWithEyeColor = users.filter(users => user.eyeColor);
// твой код

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
