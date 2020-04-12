'use strict';
let input;
let total = 0;

while(true){
input = +prompt('Введите число:', '');
if(!input) break ;
    total += input;
    
}
alert(`Общая сумма чисел равна ${total}`);