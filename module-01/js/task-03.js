'use strict';
const ADMIN_PASSWORD = 'jqueryismyjam';
let message = prompt('Пожалуйста введите пароль');


if(message === null){
    alert('Отменено пользователем!');
} else if(ADMIN_PASSWORD === message){
    alert('Добро пожаловать!');
} else if(ADMIN_PASSWORD !== message){
    alert('Доступ запрещен, неверный пароль!');}








