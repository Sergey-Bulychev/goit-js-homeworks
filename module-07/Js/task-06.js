'use strict';
const inputEvent = document.querySelector('#validation-input');
inputEvent.addEventListener('keyup', (keyup) => even1(keyup, inputEvent));

function even1(keyup, elem) {
	const targData = keyup.target.dataset.length;
	const targValue = keyup.target.value.length;

	if (targData >= targValue) {
		elem.classList.remove('valid');
		return elem.classList.add('invalid');
	}
	if (targData <= targValue) {
		elem.classList.remove('invalid');
		return elem.classList.add('valid');
	}
}