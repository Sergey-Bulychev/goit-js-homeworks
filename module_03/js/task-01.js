'use strict';
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
}; //объявляем объект
user['mood'] = 'happy'; //добавляем ключ со значением
user.hobby = 'skydiving'; // меняем значение
user.premium = false; // меняем значение

const keys = Object.keys(user); // переменная keys массив с ключами объекта

for (const key of keys) {
  //перебираем объект
  console.log(`${key}:`, user[key]);
}
