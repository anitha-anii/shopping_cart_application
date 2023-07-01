/*for cart*/
let cartdiv = document.querySelector('.Cart');
let imgdiv = document.querySelector('.imgdiv');
let details = document.querySelector('.details');

async function randomProduct() {
  let res = await fetch('https://fakestoreapi.com/products');
  let data = await res.json();

  let randomIndex = Math.floor(Math.random() * data.length);
  let randomItem = data[randomIndex];

  let img = randomItem.image;
  let price = randomItem.price;
  let rating = randomItem.rating.rate;
  let color = ['red', 'blue'];

  imgdiv.innerHTML = ''; 

  let image = document.createElement('img');
  image.style.width = '200px';
  image.style.height = '200px';
  image.src = img;
  imgdiv.appendChild(image);

  details.innerHTML = ''; 

  let paragraph1 = document.createElement('p');
  paragraph1.textContent = `Price:$${price}`;

  let paragraph2 = document.createElement('p');
  paragraph2.textContent = `Rating: ${rating}`;

  let paragraph3 = document.createElement('p');
  paragraph3.textContent = `Colors: ${color.join(', ')}`;

  let button = document.createElement('button');
  button.id = 'addcart';
  button.textContent = 'Add To Cart';

  details.appendChild(paragraph1);
  details.appendChild(paragraph2);
  details.appendChild(paragraph3);
  details.appendChild(button);

  cartdiv.innerHTML = ''; 
  cartdiv.appendChild(imgdiv);
  cartdiv.appendChild(details);
}
document.getElementById('login').addEventListener('click',()=>{
  window.location.href='/login/index.html';
})
document.getElementById('Signup').addEventListener('click',()=>{
  window.location.href='/signup/index.html';
})

let messages = document.querySelectorAll('.alart a');
messages.forEach(message => {
  message.addEventListener('click', () => {
    alert('you need to login/signup😢');
  });
});


setInterval(randomProduct, 5000); 
randomProduct(); 
