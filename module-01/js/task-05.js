'use strict';
let message = prompt('Укажите страну доставки:');
const china = 'китай';
const chile = 'чили';
const australia = 'австралия';
const india = 'индия';
const jamaica = 'ямайка';
let price;

switch(message[1].toLowerCase()){
    case china:
        price = '100 кредитов';
        alert(`Доставка в ${china} будет стоить ${price}`);
        break;
    case chile:
        price = '250 кредитов';
        alert(`Доставка в ${chile} будет стоить ${price}`);
        break;
    case australia:
        price = '170 кредитов';
        alert(`Доставка в ${australia} будет стоить ${price}`);
        break;   
    case india:
        price = '80 кредитов';
        alert(`Доставка в ${india} будет стоить ${price}`);
        break;       
    case jamaica:
        price = '120 кредитов';
        alert(`Доставка в ${jamaica} будет стоить ${price}`);
        break;
    default:
        alert('В вашей стране доставка не доступна')
}