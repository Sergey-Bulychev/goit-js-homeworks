'use strict';
const items = document.querySelectorAll('ul#categories .item'); //Нашли элементы с классом item и записали в переменную
const items2 = document.querySelector('#categories').children;

console.log(`В списке ${items.length} категории.`);
const headItems = document.querySelectorAll('ul#categories .item'); 
// headItems.forEach((item) => console.log(item.children[0].textContent));
headItems.forEach((item) =>
	console.log(item.firstElementChild.textContent, item.firstElementChild.nextElementSibling.children.length));
