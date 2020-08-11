'use strict';
import users from './users.js';
const getUsersWithGender = users.filter(user => user.gender);
// твой код

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
