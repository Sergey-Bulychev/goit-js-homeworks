'use strict';
//Получить массив имен всех пользователей (поле name).
import users from './users.js';

const getUserNames = arr => arr.map(user => user.name);
// твой код
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// task-02
const getUsersWithEyeColor = arr =>
  arr.filter(user => user.eyeColor === 'blue');
// твой код

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// task-03
const getUsersWithGender = arr => arr.filter(user => user.gender === 'male');
// твой код

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// task-04
const getInactiveUsers = arr => arr.filter(user => user.isActive === false);
// твой код

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// task-05
const getUserWithEmail = (user, email) => user.find(x => x.email === email);
// твой код

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// task-96
const getUsersWithAge = (users, min, max) =>
  users.filter(user => user.age >= min && user.age <= max);
// твой код

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//task-07
const calculateTotalBalance = arr =>
  arr.reduce((totalBalance, user) => totalBalance + user.balance, 0);
// твой код
console.log(calculateTotalBalance(users)); // 20916

//task-08
const getUsersWithFriend = (users, friendName) =>
  users.filter(x => x.friendName === friendName);
// твой код
console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

//task-09
const getNamesSortedByFriendsCount = users =>
  users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(names => names.name);

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//tast-10
const getSortedUniqueSkills = users =>
  users
    .map(user => user.skills)
    .reduce((accum, skill) => [...accum, ...skill], [])
    .sort((a, b) => a.localeCompare(b, 'en'))
    .filter((skill, i, array) => array.indexOf(skill) === i);
console.log(getSortedUniqueSkills(users));
