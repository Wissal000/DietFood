import React from "react";
import logo from "../Assets/logo.png";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="nav-logo-container">
        <img src={logo} alt="" />
      </div>
      <h1 className="primary-heading">Our Menu</h1>
      <p className="primary-text">
        Discover our range of healthy and delicious meals — ready to order!
      </p>
      {/* Example menu items */}
      <div className="menu-items">
        <div className="menu-item-card">
          <h3>Grilled Chicken Salad</h3>
          <p>High-protein, low-carb, super fresh.</p>
        </div>
        <div className="menu-item-card">
          <h3>Vegan Buddha Bowl</h3>
          <p>Quinoa, veggies, and tahini dressing.</p>
        </div>
        <div className="menu-item-card">
          <h3>Lean Beef & Brown Rice</h3>
          <p>Perfect for fitness-focused meals.</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
