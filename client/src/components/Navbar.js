import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaShoppingCart, FaUser } from "react-icons/fa";
import "./Navbar.css"; // Import the CSS file for Navbar styles

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div>
          <img src="/pizzas/logo-1.png" alt="Apsley Arms Hotel" />
        </div>

        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/product">Product</Link>
            </li>

            <li>
              <Link to="/receipe">Receipe</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/accomodation">Accomodation</Link>
            </li>
          </ul>
        </div>

        <div>
          <button className="special-offer-button">Special Offer</button>
        </div>
        <div className="contact-info">
          <FaPhone />
          98104903834
        </div>

        <div className="corner-menu">
          <Link to="/login">
            <FaUser />
          </Link>
          <Link to="/cart">
            <FaShoppingCart />
          </Link>
        </div>
      </nav>
    </>
  );
};
