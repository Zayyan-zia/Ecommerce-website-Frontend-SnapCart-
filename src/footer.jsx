import { NavLink } from "react-router-dom";
import React from 'react'
function Footer(){
    return<>
    <footer className="footer">
  <div className="footer-section about">
    <h4>About SnapCart</h4>
    <p>Your one-stop shop for the best deals on gadgets, clothing, and more.</p>
  </div>

  <div className="footer-section links">
    <h4>Quick Links</h4>
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/products">Products</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
      <li><NavLink to="/about-us">About Us</NavLink></li>
    </ul>
  </div>

  <div className="footer-section help">
    <h4>Customer Support</h4>
    <ul>
      <li>FAQs</li>
      <li>Shipping & Returns</li>
      <li>Track Order</li>
      <li>Privacy Policy</li>
    </ul>
  </div>

  <div className="footer-section newsletter">
    <h4>Newsletter</h4>
    <input type="email" id="footer-input" placeholder="Your Email" />
    <button>Subscribe</button>
  </div>

  <div className="footer-bottom">
    <p>&copy; 2025 SnapCart. All rights reserved.</p>
  </div>
</footer>

    </>
}
export default Footer;