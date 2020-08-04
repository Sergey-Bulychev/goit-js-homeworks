'use strict';
class Storage {
  constructor(product) {
    this.product = product;
  }
  getItems() {
    return this.product;
  }
  addItem(item) {
    this.product.push(item);
  }
  removeItem(item) {
    let items = this.products.filter(items => items !== item);
    this.products.splice(0);
    this.products.push(...items);
  }
}
