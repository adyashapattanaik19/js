import { ShoppingCart } from "./AddToCart.js";
document.addEventListener("DOMContentLoaded", function () {
  const cartItems = document.getElementById("cart-items");
  const totalPrice = document.getElementById("total-price");
  const productList = document.getElementById("product-list");
  const sidebar = document.getElementById("sidebar");
  const closeSidebar = document.getElementById("close-sidebar");
  const shoppingCart = new ShoppingCart(updateSidebar);
  let products = [];
  let currentPage = 1;
  const itemsPerPage = 3;

  function fetchProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        products = data;
        displayProducts(products);
        addPagination(products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }

  function displayProducts(products) {
    productList.innerHTML = "";
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const productsToDisplay = products.slice(startIndex, endIndex);

    productsToDisplay.forEach((product) => {
      const productElement = new ProductElement();
      productElement.image = product.image;
      productElement.title = product.title;
      productElement.price = product.price;
      productElement.setAttribute("dataId", product.id);

      const addToCartButton = document.createElement("button");
      addToCartButton.className = "add-to-cart";
      addToCartButton.textContent = "Add to Cart";
      addToCartButton.setAttribute("dataId", product.id);
      addToCartButton.addEventListener("click", (event) => {
        const productId = event.target.getAttribute("dataId");
        const product = products.find((p) => p.id == productId);

        if (product) {
          openSidebar(product);
          shoppingCart.addToCart(product);
          updateSidebar();
          calculateTotalPrice();
        }
      });

      productElement.appendChild(addToCartButton);

      productList.appendChild(productElement);
    });
  }

  function addPagination(products) {
    const pageCount = Math.ceil(products.length / itemsPerPage);
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    for (let i = 1; i <= pageCount; i++) {
      const pageButton = document.createElement("button");
      pageButton.className = "page-button";
      pageButton.textContent = i;
      pageButton.addEventListener("click", () => {
        currentPage = i;
        displayProducts(products);
      });
      pagination.appendChild(pageButton);
    }
  }

  fetchProducts();

  closeSidebar.addEventListener("click", () => {
    sidebar.style.right = "-250px";
  });

  function openSidebar(product) {
    sidebar.style.right = "0";
    if (product && product.image && product.title && product.price) {
      const productInSidebar = document.createElement("div");
      productInSidebar.className = "product-in-sidebar";
      productInSidebar.innerHTML = `
      <img src="${product.image}" alt="${
        product.title
      }" style="max-width: 60px; max-height: 60px;">
      <div class="product-details">
        <div class="title">${product.title}</div>
        <div class="price">${parseFloat(product.price).toFixed(2)}</div>
      </div>
    `;
      cartItems.appendChild(productInSidebar);
    }
  }
  productList.addEventListener("click", (event) => {
    if (event.target.classList.contains("add-to-cart")) {
      openSidebar();
    }
  });

  closeSidebar.addEventListener("click", () => {
    sidebar.style.right = "-250px";
  });
  function updateSidebar() {
    cartItems.innerHTML = "";
    let total = 0;

    shoppingCart.cart.forEach((item) => {
      const quantity = item.quantity;
      if (quantity >= 1) {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
          <div class="cart-item">
            <img src="${item.image}" alt="${item.title}" style="max-width: 60px; max-height: 60px;">
            <div class="cart-details">
              <div class="title">${item.title}</div>
              <div class="quantity">Quantity: ${quantity}</div>
              <button class="increase-quantity" dataId="${item.id}">+</button>
              <button class="decrease-quantity" dataId="${item.id}">-</button>
            </div>
          </div>
        `;
        const quantityElement = cartItem.querySelector(".quantity");

        const increaseButton = cartItem.querySelector(".increase-quantity");
        increaseButton.addEventListener("click", () => {
          const itemId = item.id;
          shoppingCart.increaseQuantity(itemId);

          quantityElement.textContent = `Quantity: ${item.quantity}`;
          updateSidebar();
          calculateTotalPrice();
        });
        const decreaseButton = cartItem.querySelector(".decrease-quantity");
        decreaseButton.addEventListener("click", () => {
          const itemId = item.id;
          shoppingCart.decreaseQuantity(itemId);

          quantityElement.textContent = `Quantity: ${item.quantity}`;
          updateSidebar();
          calculateTotalPrice();
        });
        cartItems.appendChild(cartItem);
        total += quantity;
      }
    });

    calculateTotalPrice();
  }
  function calculateTotalPrice() {
    let total = 0;

    shoppingCart.cart.forEach((item) => {
      const price = parseFloat(item.price);
      if (!isNaN(price)) {
        let quantity = item.quantity;
        if (quantity < 1) {
          quantity = 1;
        }
        total += price * quantity;
      }
    });
    totalPrice.textContent = `Total Price: $${total.toFixed(2)}`;
  }
});
