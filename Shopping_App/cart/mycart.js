// Display cart items
function displayCartItems() {
    let cartItems = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [];
  
    let cartItemsContainer = document.getElementById('cartItems');
    let checkoutList = document.getElementById('checkoutList');
    let totalPrice = 0;

        cartItemsContainer.innerHTML = '';
        checkoutList.innerHTML = '';
  
    cartItems.forEach((item, index) => {
      let productDiv = document.createElement('div');
      productDiv.classList.add('cartProduct');
  
      let image = document.createElement('img');
      image.src = item.image;
      image.alt = 'Product Image';
      image.classList.add('cartImage');
  
      let price = document.createElement('p');
      price.textContent = `Price: $${item.price}`;
      price.classList.add('cartPrice');
  
      let removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove From Cart';
      removeBtn.classList.add('removeBtn');
      removeBtn.setAttribute('data-index', index);
  
      productDiv.appendChild(image);
      productDiv.appendChild(price);
      productDiv.appendChild(removeBtn);
      cartItemsContainer.appendChild(productDiv);
  
 
 let listItem = document.createElement('li');
 listItem.textContent = `Price: $${item.price}`;
 checkoutList.appendChild(listItem);

 
 totalPrice += item.price;
    });
  
    let removeButtons = document.querySelectorAll('.removeBtn');
    removeButtons.forEach(button => {
      button.addEventListener('click', removeCartItem);
    });

    let totalElement = document.getElementById('total');
  totalElement.textContent = `Total: Rs ${totalPrice.toFixed(2)}`;

  }
  
  // Remove cart item
  function removeCartItem(event) {
    let index = event.target.getAttribute('data-index');
    let cartItems = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [];
  
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
  
    displayCartItems();
  }
  
  
  function checkout() {
    localStorage.removeItem('cart');
    alert('Items purchased!');
    displayCartItems();
  }
  
  
  let checkoutBtn = document.getElementById('checkoutBtn');
  checkoutBtn.addEventListener('click', checkout);
  
  
  displayCartItems();
  
  
