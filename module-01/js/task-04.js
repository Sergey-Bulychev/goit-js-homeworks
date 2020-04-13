'use strict';
let credits = 23580;
const pricePerDroid = 3000;
let totalPrice = 0;
// const num = Number(quantity);
let quantity = +prompt('Введите количество дройдов', '');

if (quantity === null) {
  alert('Отменено пользователем!');
} else if (quantity * pricePerDroid >= credits) {
  alert('Недостаточно средств на счету!');
} else if (quantity * pricePerDroid <= credits) {
  totalPrice = quantity * pricePerDroid;
  credits -= totalPrice;
  alert(
    `Вы купили ${quantity} дроидов, на счету осталось ${credits} кредитов.`,
  );
}
