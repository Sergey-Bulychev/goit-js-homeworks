'use strict';
import users from './users.js';
const getUsersWithFriend = (users, friendName) =>
  users.find(x => x.friendName === friendName);
// твой код
console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
