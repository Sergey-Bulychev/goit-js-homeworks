'use strict';
const textInInput = document.querySelector('#name-input');
const textInspan = document.querySelector('#name-output');

const addText = (startText, changeText) => {
	if (!changeText.value && startText.value === undefined) return (startText.textContent = 'Незнакомец');
	startText.textContent = changeText.value;
};

textInInput.addEventListener('keyup', () => addText(textInspan, textInInput));