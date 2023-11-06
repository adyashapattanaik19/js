export class ShoppingCart {
  constructor(updateCallback) {
    this.cart = [];
    this.updateCallback=updateCallback;
  }
 addToCart(product) {
    const existingCartItem = this.cart.find((item) => item.id === product.id);
    if (existingCartItem) {
      existingCartItem.quantity += 1;
    } else {
      product.quantity = 1;
      this.cart.push(product);
    } 
  }
increaseQuantity(itemId) {
    const cartItem = this.cart.find((item) => item.id === itemId);
    if (cartItem) {
      cartItem.quantity += 1;
      this.updateCallback();
    } 
  }
decreaseQuantity(itemId) {
    const cartItem = this.cart.find((item) => item.id === itemId);
    if (cartItem && cartItem.quantity > 1) {
      cartItem.quantity -= 1;
    } else {
      const itemIndex = this.cart.findIndex((item) => item.id === itemId);
      if (itemIndex !== -1) {
        this.cart.splice(itemIndex, 1);
      }
    }
    this.updateCallback();
  }
}
