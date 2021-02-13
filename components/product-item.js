// product-item.js

class ProductItem extends HTMLElement {
  // TODO
  /*
    <!-- Sample Product -->
  <!-- li class="product">
      <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops" width=200>
      <p class="title">Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops</p>
      <p class="price">$109.95</p>
      <button onclick="alert('Added to Cart!')">Add to Cart</button>
  </li -->
   */
  constructor(pobject){
    super();
    this.attachShadow({mode: 'open'});

    const wrapper = document.createElement('li');

    wrapper.setAttribute('class','product');
    
    const icon = wrapper.appendChild(document.createElement('img'));
    icon.setAttribute('src',pobject.image);
    icon.setAttribute('alt', pobject.title);
    icon.setAttribute('width',200);

    const title = wrapper.appendChild(document.createElement('p'));
    title.setAttribute('class','title');
    title.innerHTML = pobject.title;
    
    const price = wrapper.appendChild(document.createElement('p'));
    price.setAttribute('class','price');
    price.innerHTML = "$" + pobject.price;

    let btn = document.createElement('button');
    btn.id = 'yup';
    if(localStorage.getItem(pobject.id) == null){
      btn.innerHTML = "Add To Cart";
    } else {
      btn.innerHTML = "Remove From Cart";
    }
    //Create a list of all the items that you have kept 
    btn.onclick = function(){
      let val = parseFloat(document.getElementById("cart-count").innerText);
      if(btn.innerHTML == "Add To Cart"){
        btn.innerHTML = "Remove From Cart";
        val++;
        document.getElementById("cart-count").innerHTML = val;
        localStorage.setItem(21,val);
        localStorage.setItem(pobject.id,1);
      } else {
        btn.innerHTML = "Add To Cart";
        val--;
        document.getElementById("cart-count").innerHTML = val;
        localStorage.setItem(21,val);
        localStorage.removeItem(pobject.id);
      }
    };

    wrapper.appendChild(btn);

    /*
    const addToCart = wrapper.appendChild(document.createElement('button'));
    addToCart.setAttribute('id', "myButton"+ pobject.id);
    addToCart.innerHTML = "Add To Cart!";
    addToCart.setAttribute('onclick',"alert('Added to Cart')");

    //Button Changes from Remove from Cart <--> Add To Cart
    addToCart.addEventListener('click',function(){
      let val = parseFloat(document.getElementById("cart-count"));
      if(addToCart.innerText == "Remove from Cart"){
        addToCart.innerText = "Add To Cart";
        this.getElementById("cart-count").innerText(val--);
      }else{
        addToCart.innerText = "Remove from Cart";
        this.getElementById("cart-count").innerText(val++);
      }
    });
    */

    const style = document.createElement('style');
    style.textContent = `
    .price {
      color: green;
      font-size: 1.8em;
      font-weight: bold;
      justify-self:center;
      margin: 0;
    }
    
    .product {
      align-items: center;
      background-color: white;
      border-radius: 5px;
      display: grid;
      grid-template-areas: 
      'image'
      'title'
      'price'
      'add';
      grid-template-rows: 67% 11% 11% 11%;
      height: 450px;
      filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
      margin: 0 30px 30px 0;
      padding: 10px 20px;
      width: 200px;
    }
    
    .product > button {
      background-color: rgb(255, 208, 0);
      border: none;
      border-radius: 5px;
      color: black;
      justify-self: center;
      max-height: 35px;
      padding: 8px 20px;
      transition: 0.1s ease all;
    }
    
    .product > button:hover {
      background-color: rgb(255, 166, 0);
      cursor: pointer;
      transition: 0.1s ease all;
    }
    
    .product > img {
      align-self: center;
      justify-self: center;
      width: 100%;
    }
    
    .title {
      font-size: 1.1em;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    .title:hover {
      font-size: 1.1em;
      margin: 0;
      white-space: wrap;
      overflow: auto;
      text-overflow: unset;
    }
    `;

    this.shadowRoot.append(style,wrapper);
  }
}


customElements.define('product-item', ProductItem);