import React, { useState, useEffect } from "react";
import "./Product.css";


function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addtoCart= (item)=>{
    let cart=JSON.parse(localStorage.getItem('cart')) || [] 


    const index = cart.findIndex((i)=> i.id === item.id)
    if(index !==-1){
      cart[index].quantity += 1
    }
    else{
   cart.push(item)
    }
  localStorage.setItem('cart',JSON.stringify(cart))
  
alert('Product added to cart')
 }

  return (
    <div className="products-container">
      <h1 className="products-title">Products</h1>

      <div className="products-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>₹ {item.price}</p>
            <button onClick={()=> addtoCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;