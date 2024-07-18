"use strict";
//For Julian's Additions Ctrl+F "Julian Addition"

let cart = [

];


// Function to display products
function displayProducts(filteredProducts) {
  const container = document.getElementById('product-container');
  container.innerHTML = '';
  filteredProducts.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'col-md-4 mb-4';
    productDiv.innerHTML = `
      <div class="card">
        <img src="../${product.img}" class="card-img-top" alt="${product.name}">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">
            Price: $${product.price.toFixed(2)}<br>
            Available: ${product.maxQuanity} ${product.unitOfMeasurement}
          </p>
          <button class="btn btn-primary" ${product.maxQuanity === 0 ? 'disabled' : ''} onclick="addToCart('${product.name}')">Add to Cart</button>
        </div>
      </div>
    `;
    container.appendChild(productDiv);
  });
}

// Function to filter products based on selected type
function filterProducts() {
  const selectedType = document.getElementById('sort-select').value;
  if (selectedType === 'all') {
    displayProducts(modelCandyData);
  } else {
    const filteredProducts = modelCandyData.filter(product => product.type === selectedType);
    displayProducts(filteredProducts);
  }
}

// Function to add products to cart
function addToCart(productName) {
  const product = modelCandyData.find(p => p.name === productName);
  if (product && product.maxQuanity > 0) {
    product.maxQuanity -= 1; // Decrease the quantity



    //Julian Addition
    //formats the cart in a way that works with the code from checkout.js
    createCartEntry(product);
    //adds the cart to the session storage for checkout.js
    sessionStorage.cart = JSON.stringify(cart);
    //

    
    alert(`${product.name} has been added to your cart.`);

    filterProducts(); // Re-render the product list to update the available quantities
  } else {
    alert(`Sorry, ${product.name} is out of stock.`);
  }

}

// Wait until the DOM is fully loaded before displaying products
document.addEventListener('DOMContentLoaded', () => {
  displayProducts(modelCandyData);
});

//Julian Addition
function createCartEntry(product){
if(cart.length > 0){

  //checks if the cart has the object already in it, in which case it will
  //increment the quantity by 1.
  for(let item of cart){
    if(item.item.name == product.name){
      item.quantity += 1;
      
      return 0;
    }
  }

  //otherwise it will add the item to the cart.
  let obj = 
  {
    item:product,
    quantity:1
  }
  cart.push(obj);
} else {

  let obj = {
    item:product,
    quantity:1
  }
  cart.push(obj);
}

}

