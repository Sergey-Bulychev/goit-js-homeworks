'use strict';
import users from './users.js';
const getSortedUniqueSkills = users =>
  users
    .map(user => user.skills)
    .reduce((accum, skill) => [...accum, ...skill], [])
    .sort((a, b) => a.localeCompare(b, 'en'))
    .filter((skill, i, array) => array.indexOf(skill) === i);
    console.log(getSortedUniqueSkills(users));