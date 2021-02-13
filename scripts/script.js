// Script.js
window.addEventListener('DOMContentLoaded', () => {
  // TODO 
  fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => localStorage.setItem(0,JSON.stringify(data)));
  let list = JSON.parse(localStorage.getItem(0));

  if(localStorage.getItem(21) == null){
    document.getElementById("cart-count").innerText = 0;
  }else{
    let numOfItems = JSON.parse(localStorage.getItem(21));
    document.getElementById("cart-count").innerText = numOfItems;
  }

  for(let i = 0; i < 20; i++){
    let item = new ProductItem(list[i]);
    document.getElementById("product-list").appendChild(item);
  }
});