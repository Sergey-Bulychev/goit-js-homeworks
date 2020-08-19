'use strict';
//Получить массив имен всех пользователей (поле name).
import users from './users.js';

const getUserNames = (arr = arr.map(users => users.name));
// твой код
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
