'use strict';
class StringBuilder {
  constructor(value) {
    this.value = [value];
  }

  returnValue() {
    return this.value;
  }

  append(str) {
    this.value.push(str);
  }
  prepend(str) {
    this.value.unshift(str);
  }
  pad(str) {
    this.append(str);
    this.prepend(str);
  }
}
const builder = new StringBuilder('.');

const items = builder.returnValue();

builder.append('^');
console.log(items.join('')); // '.^'

builder.prepend('^');
console.log(items.join('')); // '^.^'

builder.pad('=');
console.log(items.join('')); // '=^.^='
