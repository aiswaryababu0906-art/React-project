import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("cart")) || [];

    // Add quantity if missing
    data = data.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
    }));

    localStorage.setItem("cart", JSON.stringify(data));
    setCart(data);
  }, []);

  const removeItem = (index) => {
    let cartdata = [...cart];
    cartdata.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cartdata));
    setCart(cartdata);
  };

  const increasequantity = (index) => {
    let cartdata = [...cart];
    cartdata[index].quantity = (cartdata[index].quantity || 1) + 1;

    localStorage.setItem("cart", JSON.stringify(cartdata));
    setCart(cartdata);
  };

  const decreasequantity = (index) => {
    let cartdata = [...cart];

    if ((cartdata[index].quantity || 1) > 1) {
      cartdata[index].quantity -= 1;
      localStorage.setItem("cart", JSON.stringify(cartdata));
      setCart(cartdata);
    } else {
      removeItem(index);
    }
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 My Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-grid">
            {cart.map((item, index) => (
              <div className="cart-card" key={index}>
                <img src={item.image} alt={item.title} className="cart-img" />

                <h4>{item.title}</h4>
                <p>₹ {item.price}</p>
                <p>Quantity: {item.quantity}</p>

                <div className="cart-buttons">
                  <button onClick={() => increasequantity(index)}>+</button>
                  <button onClick={() => decreasequantity(index)}>-</button>
                  <button onClick={() => removeItem(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <h3>Total Amount: ₹ {total.toFixed(2)}</h3>

          <button onClick={() => navigate("/checkout")}>
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;