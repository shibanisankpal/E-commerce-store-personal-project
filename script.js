// Sample product data
const products = [
    { id: 1, name: "Phone Cover", price: 10, image: "img/phone cover.png" },
    { id: 2, name: "Wired Headphones", price: 20, image: "img/wired headphones.png" },
    { id: 3, name: "Fitness Tracker", price: 30, image: "img/fitness tracker.png" },
  ];
  
  // Cart items
  let cartItems = [];
  
  // Function to display products
  function displayProducts() {
    const productContainer = document.getElementById("product-list");
  
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.innerHTML = `
        <h3>${product.name}</h3>
        <img src="${product.image}" alt="${product.name}">
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productContainer.appendChild(productCard);
    });
  }
  
  // Function to add a product to the cart
  function addToCart(productId) {
    const product = products.find((product) => product.id === productId);
  
    if (product) {
      // Show loading spinner while processing
      const addButton = event.target;
      addButton.innerHTML = '<div class="loading-spinner"></div>';
  
      // Simulate delay to demonstrate loading
      setTimeout(() => {
        cartItems.push(product);
  
        // Update cart display
        const cartItemsContainer = document.getElementById("cart-items");
        cartItemsContainer.innerHTML = "";
        cartItems.forEach((item, index) => {
          const cartItem = document.createElement("div");
          cartItem.innerHTML = `
            <p>${item.name} - $${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
          `;
          cartItemsContainer.appendChild(cartItem);
        });
  
        // Update cart total
        updateCartTotal();
  
        // Reset button text
        addButton.innerHTML = "Add to Cart";
      }, 1000); // Simulate a 1-second delay
    }
  }
  
  // Function to remove a product from the cart
  function removeFromCart(index) {
    cartItems.splice(index, 1);
  
    // Update cart display
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = "";
    cartItems.forEach((item, index) => {
      const cartItem = document.createElement("div");
      cartItem.innerHTML = `
        <p>${item.name} - $${item.price}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      `;
      cartItemsContainer.appendChild(cartItem);
    });
  
    // Update cart total
    updateCartTotal();
  }
  
  // Function to update the cart total
  function updateCartTotal() {
    const cartTotalAmount = document.getElementById("cart-total-amount");
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    cartTotalAmount.textContent = total;
  }
  
  // Function for checkout
  function checkout() {
    if (cartItems.length > 0) {
      // Perform checkout process (e.g., submit order, payment processing)
      alert("Checkout complete!");
  
      // Clear cart
      cartItems = [];
      const cartItemsContainer = document.getElementById("cart-items");
      cartItemsContainer.innerHTML = "";
  
      // Update cart total
      updateCartTotal();
    } else {
      alert("Your cart is empty. Please add items before checking out.");
    }
  }
  
  // Initialize the store
  function initializeStore() {
    displayProducts();
  
    const checkoutBtn = document.getElementById("checkout-btn");
    checkoutBtn.addEventListener("click", checkout);
  }
  
  // Initialize the store when the page loads
  window.addEventListener("load", initializeStore);
  