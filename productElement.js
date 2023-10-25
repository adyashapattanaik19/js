class ProductElement extends HTMLElement {
  constructor() {
    super();
  }

  set product(value) {
    this._product = value;
    this.render();
  }

  get product() {
    return this._product;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this._product) {
      const price = parseFloat(this._product.price);
      this.innerHTML = `
        <style>
          .product {
            border: 1px solid #ccc;
            margin: 10px;
            padding: 10px;
            width: 200px;
            text-align: center;
          }
          .product img {
            max-width: 100%;
            height: auto;
          }
          .title {
            font-size: 18px;
            font-weight: bold;
          }
          .price {
            font-size: 16px;
          }
        </style>
        <div class="product">
          <img src="${this._product.image}" alt="${this._product.title}">
          <div class="title">${this._product.title}</div>
          <div class="price">$${this._product.price.toFixed(2)}</div>
          <button class="add-to-cart" data-id="${this._product.id}">Add To Cart</button>
        </div>
      `;
    }
  }
}

customElements.define('product-element', ProductElement);
let products=[];
products.forEach((product) => {
  const productElement = document.createElement('product-element');
  productElement.setAttribute('class', 'product-element');
  productElement.product = product;
  document.body.appendChild(productElement);
});
