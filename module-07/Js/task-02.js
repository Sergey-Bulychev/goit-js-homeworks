'use strict';
const ingredients = [ 'Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы' ];
const idIngred = document.querySelector('#ingredients');

function product(elem, array) {
	const creadLi = (text) => {
		let li = document.createElement('li');
		li.textContent = text;
		return li;
	};
	let returnLi = array.map((text, i) => (i = creadLi(text)));
    elem.append(...returnLi);}
    product(idIngred, ingredients);