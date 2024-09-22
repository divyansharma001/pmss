import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 PMSSS. All Rights Reserved.</p>
      <ul className="footer-links">
        <li>
          <a href="#privacy">Privacy Policy</a>
        </li>
        <li>
          <a href="#terms">Terms & Conditions</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
