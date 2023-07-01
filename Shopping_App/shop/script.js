let menDiv = document.querySelector('.menSection .Cart');
let womenDiv = document.querySelector('.womenDiv .Cart');
let jewelryDiv = document.querySelector('.jewelryDiv .Cart');
let ElectronicsDiv = document.querySelector('.electronics .Cart');
let applyfilterbtn=document.getElementById('applyfilterbtn');


function generateRandomColor() {
  let colors = ['Blue', 'Red', 'Green', 'Black', 'White'];
  let randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function generateRandomSize() {
  let sizes = ['S', 'M', 'L', 'XL'];
  let randomIndex = Math.floor(Math.random() * sizes.length);
  return sizes[randomIndex];
}

async function product() {
  let res = await fetch('https://fakestoreapi.com/products');
  let data = await res.json();

  let men = data.filter(item => item.category === "men's clothing");
  let women = data.filter(item => item.category === "women's clothing");
  let jewelry = data.filter(item => item.category === "jewelery");
  let Electronics = data.filter(item => item.category === "electronics");

  // Display men's products
  men.forEach(item => {
    let img = item.image;
    let price = item.price;
    let rating = item.rating.rate;
    let color = generateRandomColor();
    let size = generateRandomSize();

    let productDiv = document.createElement('div');
    productDiv.classList.add('product');

    let image = document.createElement('img');
    image.style.width = '200px';
    image.style.height = '200px';
    image.src = img;

    productDiv.appendChild(image);

    let details = document.createElement('div');
    details.classList.add('details');

    let paragraph1 = document.createElement('p');
    paragraph1.textContent = `Price: $${price}`;

    let paragraph2 = document.createElement('p');
    paragraph2.textContent = `Rating: ${rating}`;

    let paragraph3 = document.createElement('p');
    paragraph3.textContent = `Colors: ${color}`;

    let paragraph4 = document.createElement('p');
    paragraph4.textContent = `Size: ${size}`;

    let button = document.createElement('button');
    button.classList.add('addcart');
    button.textContent = 'Add To Cart';

    button.addEventListener('click', () => {
      addToCart(item);
    });

    
    details.appendChild(paragraph1);
    details.appendChild(paragraph2);
    details.appendChild(paragraph3);
    details.appendChild(paragraph4);
    details.appendChild(button);

    productDiv.appendChild(details);
    menDiv.appendChild(productDiv);
  });

  // Display women's products
  women.forEach(item => {
    let img = item.image;
    let price = item.price;
    let rating = item.rating.rate;
    let color = generateRandomColor();
    let size = generateRandomSize();

    let productDiv = document.createElement('div');
    productDiv.classList.add('product');

    let image = document.createElement('img');
    image.style.width = '200px';
    image.style.height = '200px';
    image.src = img;

    productDiv.appendChild(image);

    let details = document.createElement('div');
    details.classList.add('details');

    let paragraph1 = document.createElement('p');
    paragraph1.textContent = `Price: $${price}`;

    let paragraph2 = document.createElement('p');
    paragraph2.textContent = `Rating: ${rating}`;

    let paragraph3 = document.createElement('p');
    paragraph3.textContent = `Colors: ${color}`;

    let paragraph4 = document.createElement('p');
    paragraph4.textContent = `Size: ${size}`;

    let button = document.createElement('button');
    button.classList.add('addcart');
    button.textContent = 'Add To Cart';

    button.addEventListener('click', () => {
      addToCart(item);
    });

    details.appendChild(paragraph1);
    details.appendChild(paragraph2);
    details.appendChild(paragraph3);
    details.appendChild(paragraph4);
    details.appendChild(button);

  productDiv.appendChild(details);
    womenDiv.appendChild(productDiv);
  });


  // Display jewelry products
  jewelry.forEach(item => {
    let img = item.image;
    let price = item.price;
    let rating = item.rating.rate;
    let color = generateRandomColor();
    let size = generateRandomSize();

    let productDiv = document.createElement('div');
    productDiv.classList.add('product');

    let image = document.createElement('img');
    image.style.width = '200px';
    image.style.height = '200px';
    image.src = img;
    productDiv.appendChild(image);

    let details = document.createElement('div');
    details.classList.add('details');

    let paragraph1 = document.createElement('p');
    paragraph1.textContent = `Price: $${price}`;

    let paragraph2 = document.createElement('p');
    paragraph2.textContent = `Rating: ${rating}`;

    let paragraph3 = document.createElement('p');
    paragraph3.textContent = `Colors: ${color}`;

    let paragraph4 = document.createElement('p');
    paragraph4.textContent = `Size: ${size}`;

    let button = document.createElement('button');
    button.classList.add('addcart');
    button.textContent = 'Add To Cart';

    button.addEventListener('click', () => {
      addToCart(item);
    });

    details.appendChild(paragraph1);
    details.appendChild(paragraph2);
    details.appendChild(paragraph3);
    details.appendChild(paragraph4);
    details.appendChild(button);

    productDiv.appendChild(details);
    jewelryDiv.appendChild(productDiv);
  });

  // Display electronics products
  Electronics.forEach(item => {
    let img = item.image;
    let price = item.price;
    let rating = item.rating.rate;
    let color = generateRandomColor();
    let size = generateRandomSize();

    let productDiv = document.createElement('div');
    productDiv.classList.add('product');

    let image = document.createElement('img');
    image.style.width = '200px';
    image.style.height = '200px';
    image.src = img;
    productDiv.appendChild(image);

    let details = document.createElement('div');
    details.classList.add('details');

    let paragraph1 = document.createElement('p');
    paragraph1.textContent = `Price: $${price}`;

    let paragraph2 = document.createElement('p');
    paragraph2.textContent = `Rating: ${rating}`;

    let paragraph3 = document.createElement('p');
    paragraph3.textContent = `Colors: ${color}`;

    let paragraph4 = document.createElement('p');
    paragraph4.textContent = `Size: ${size}`;

    let button = document.createElement('button');
    button.classList.add('addcart');
    button.textContent = 'Add To Cart';

    button.addEventListener('click', () => {
      addToCart(item);
    });

    details.appendChild(paragraph1);
    details.appendChild(paragraph2);
    details.appendChild(paragraph3);
    details.appendChild(paragraph4);
    details.appendChild(button);

    productDiv.appendChild(details);
    ElectronicsDiv.appendChild(productDiv);
  });
}

product();

let allbtn = document.getElementById('allbtn');
let menbtn = document.getElementById('menbtn');
let womenbtn = document.getElementById('Wbtn');
let jewbtn = document.getElementById('Jbtn');
let elecbtn = document.getElementById('Ebtn');


function hideAllCategories() {
  menDiv.style.display = "none";
  womenDiv.style.display = "none";
  jewelryDiv.style.display = "none";
  ElectronicsDiv.style.display = "none";
}


function displayMen() {
  hideAllCategories();
  menDiv.style.display = "block";
  menDiv.style.display="flex";
}


function displayWomen() {
  hideAllCategories();
  womenDiv.style.display = "block";
  womenDiv.style.display="flex";
}


function displayJewelry() {
  hideAllCategories();
  jewelryDiv.style.display = "block";
  jewelryDiv.style.display="flex";
}


function displayElectronics() {
  hideAllCategories();
  ElectronicsDiv.style.display = "block";
  ElectronicsDiv.style.display="flex";
}

function all() {
  ElectronicsDiv.style.display = "block";
  jewelryDiv.style.display = "block";
  womenDiv.style.display = "block";
  menDiv.style.display = "block";
  ElectronicsDiv.style.display="flex";
  jewelryDiv.style.display="flex";
  womenDiv.style.display="flex";
  menDiv.style.display="flex";
}


allbtn.addEventListener('click', all);
menbtn.addEventListener('click', displayMen);
womenbtn.addEventListener('click', displayWomen);
jewbtn.addEventListener('click', displayJewelry);
elecbtn.addEventListener('click', displayElectronics);


//search
let searchbar =document.getElementById('search');
let searchbtn = document.getElementById('sbtn');

searchbtn.addEventListener('click',()=>{
  if(searchbar.value==='mens'){
    displayMen();
  }
  if(searchbar.value==='women'){
    displayWomen();
  }
  if(searchbar.value==='jewellery'){
    displayJewelry();
  }
  if(searchbar.value==='electronics'){
    displayElectronics();
  }
})





//adding in locallstorge
function addToCart(item) {
  let cartItems = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [];

  cartItems.push(item);
  localStorage.setItem('cart', JSON.stringify(cartItems));
  alert('Item added to cart.');
}





