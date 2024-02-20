class Invoice {
  items;
  constructor(items) {
    if (!Array.isArray(items)) {
      throw new Error("items must be an array");
    }
    this.items = items;
  }

  total() {
    return this.computeAmmount() + this.getShippingRate();
  }

  empty() {
    return this.items.length === 0;
  }

  getShippingRate() {
    let amount = this.computeAmmount();
    if (amount >= 2000 || this.allItemsAreFreeShipping()) {
      return 0;
    }
    return 15;
  }

  computeAmmount() {
    if (this.empty()) {
      return 0;
    }
    const amount = this.items.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    );
    return amount >= 2000 ? amount * 0.9 : amount;
  }

  allItemsAreFreeShipping() {
    const itemWithFreeShipping = this.items.filter(
      (i) => i.freeShipping === true
    );
    return itemWithFreeShipping.length === this.items.length;
  }
}

module.exports = {
  Invoice,
};
