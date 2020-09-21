'use strict';
'use strict';

const inputEvent1 = document.querySelector('#font-size-control');
const textInSpan = document.querySelector('#textTask7');

inputEvent1.addEventListener('input', (keyup) => even1(keyup, textInSpan)); //при передвижении ползунка сразу меняются значения

function even1(keyup, elem) {
	elem.style.fontSize = keyup.target.value + 'px';
}