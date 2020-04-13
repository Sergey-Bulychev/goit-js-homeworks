'use strict';

const total = 100;

const ordered = 80;

if (total <= ordered) {
  console.log('На складе недостаточно товаров!');
} else if (total >= ordered) {
  console.log('Заказ оформлен, с вами свяжется менеджер');
}
