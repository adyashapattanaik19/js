class ProductElement extends HTMLElement {
  constructor() {
    super();
  }

  set image(value) {
    this._image = value;
    this.render();
  }

  get image() {
    return this._image;
  }

  set title(value) {
    this._title = value;
    this.render();
  }

  get title() {
    return this._title;
  }

  set price(value) {
    this._price = value;
    this.render();
  }

  get price() {
    return this._price;
  }

  

  

  render() {
    if (this._image && this._title && this._price) {
      this.innerHTML = `
        
        <div class="product">
          <img src="${this._image}" alt="${this._title}">
          <div class="title">${this._title}</div>
          <div class="price">$${parseFloat(this._price).toFixed(2)}</div>
          <button class="add-to-cart" data-id="${this.getAttribute('data-id')}">Add To Cart</button>
        </div>
      `;
    }
  }
}

customElements.define('product-element', ProductElement);
