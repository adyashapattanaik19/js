const cartItems = document.getElementById('cart-items');
const totalPrice = document.getElementById('total-price');
const productList = document.getElementById('product-list');
const closeSidebar = document.getElementById('close-sidebar');
    let products = [];
    let cart = [];
    let currentPage = 1; 
    const itemsPerPage = 5;
    function fetchProducts() {
      fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => {
          products = data;
          displayProducts(products);
          addPagination(products);
        })
        .catch((error) => {
          console.error('Error fetching products:', error);
        });
    }
    function displayProducts(products) {
      productList.innerHTML = '';
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const productsToDisplay = products.slice(startIndex, endIndex);
     productsToDisplay.forEach((product) => {
     const productElement = document.createElement('product-element');
     productElement.image = product.image;
     productElement.title = product.title;
     productElement.price = product.price;
     productElement.setAttribute('data-id', product.id);
     productList.appendChild(productElement);
    });
   }
   function addPagination(products) {
    const pageCount = Math.ceil(products.length / itemsPerPage);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
  
    for (let i = 1; i <= pageCount; i++) {
      const pageButton = document.createElement('button');
      pageButton.className = 'page-button';
      pageButton.textContent = i;
      pageButton.addEventListener('click', () => {
        currentPage = i;
        displayProducts(products);
      });
      pagination.appendChild(pageButton);
    }
  }
    fetchProducts();
    productList.addEventListener('click', (event) => {
      if (event.target.classList.contains('add-to-cart')) {
        const productId = event.target.getAttribute('data-id');
        const product = products.find(p => p.id == productId);
    
        if (product && !isNaN(product.price) && !isNaN(product.quantity)) {
          const existingCartItem = cart.find((item) => item.id === product.id);
    
          if (existingCartItem) {
            existingCartItem.quantity += 1;
          } else {
            product.quantity = 1;
            cart.push(product);
          }
    
          updateSidebar();
        }
      }
    });
    


function updateSidebar() {
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach((item) => {
    
    const price = parseFloat(item.price);
    if (!isNaN(price)) {

      let quantity = parseInt(item.quantity, 10);
      if (isNaN(quantity) || quantity < 1) {
        quantity = 1;
      }

      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';
      cartItem.innerHTML = `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.title}" style="max-width: 60px; max-height: 60px;">
          <div class="cart-details">
            <div class="title">${item.title}</div>
            <div class="price">$${(price * quantity).toFixed(2)} x 
              <span class="quantity">${quantity}</span>
              <button class="increase-quantity" data-id="${item.id}">+</button>
              <button class="decrease-quantity" data-id="${item.id}">-</button>
            </div>
          </div>
        </div>
      `;
      cartItems.appendChild(cartItem);
      total += price * quantity; 
    } else {
      
      console.log('Invalid price:', item.price);
    }
  });

  totalPrice.textContent = `Total Price: $${total.toFixed(2)}`;
}






cartItems.addEventListener('click', (event) => {
  const target = event.target;

  if (target.classList.contains('increase-quantity')) {
    const itemId = target.getAttribute('data-id');
    const cartItem = cart.find((item) => item.id === itemId);
    if (cartItem) {
      cartItem.quantity += 1;
      console.log('Increased quantity of item', cartItem);
      
      updateSidebar(); 
    }
  } else if (target.classList.contains('decrease-quantity')) {
    const itemId = target.getAttribute('data-id');
    const cartItem = cart.find((item) => item.id === itemId);
    if (cartItem) {
      if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
      } else {
        
        const itemIndex = cart.findIndex((item) => item.id === itemId);
        if (itemIndex !== -1) {
          cart.splice(itemIndex, 1);
        }
      }
      console.log('Decreased quantity of item', cartItem);
      updateSidebar();
    }
  }
});


    closeSidebar.addEventListener('click', () => {
      sidebar.style.right = '-250px';
    });

    
    document.querySelector('body').addEventListener('click', (event) => {
      if (event.target.classList.contains('add-to-cart')) {
        sidebar.style.right = '0';
      }
})