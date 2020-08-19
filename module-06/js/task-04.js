'use strict';
import users from './users.js';
const getInactiveUsers = (arr = arr.filter(user => user.isActive));
// твой код

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
