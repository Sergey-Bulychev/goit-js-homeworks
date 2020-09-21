'use strict';
const images = [
	{
		url:
			'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		alt: 'White and Black Long Fur Cat'
	},
	{
		url:
			'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		alt: 'Orange and White Koi Fish Near Yellow Koi Fish'
	},
	{
		url:
			'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		alt: 'Group of Horses Running'
	}
];
const idGallery = document.querySelector('.gallery');

const creadLiTest2 = (addClassElem, addImag) => `<li class="${addClassElem}">${addImag}</li>`;
const creadImgTest2 = (cls, { url, alt }) => `<img class="${cls}" src="${url}" alt="${alt}">`;

const addImagInGalleryTest3 = (findElem, addWhere, array) => {
	// собрали отдельно а потом добавили всё в разметку(как я понял ,для оптимизаций так надо делать или как-то так)
	// Делаем массив данных чрез map , потом через join('')  преобразуем в строку
	let text = array.map((image) => creadLiTest2('js-gallery__box', creadImgTest2('js-img', image))).join('');
	// нашли нужный  id class и к нему добавляем шаблоны собранный ранние
	findElem.insertAdjacentHTML(addWhere, text);
};
addImagInGalleryTest3(idGallery, 'beforeend', images);