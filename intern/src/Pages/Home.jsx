import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("currentuser");
    alert("Logout successful");
    navigate("/Login");
  };

  return (
    <div className="home-container">
      <div className="home-box">
        <h2>✨ Welcome to Intern World</h2>
        <p>Your shopping world starts here 🛍️</p>

        <div className="home-buttons">
          <Link to="/Products">
            <button className="btn primary-btn">View Products</button>
          </Link>

          <Link to="/Cart">
            <button className="btn secondary-btn">My Cart</button>
          </Link>

          <Link to="/Login">
            <button className="btn secondary-btn">Go to Login</button>
          </Link>

          <Link to="/Register">
            <button className="btn secondary-btn">Go to Register</button>
          </Link>

          <button className="btn logout-btn" onClick={Logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;