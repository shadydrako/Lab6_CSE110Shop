// Script.js
window.addEventListener('DOMContentLoaded', () => {
  // TODO 
  fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => localStorage.setItem(0,JSON.stringify(data)));
  let list = JSON.parse(localStorage.getItem(0));
  
  let itemList = "[";

  for(let i = 0; i < 20; i++){
    let item = new ProductItem(list[i]);
    document.getElementById("product-list").appendChild(item);
  }
});