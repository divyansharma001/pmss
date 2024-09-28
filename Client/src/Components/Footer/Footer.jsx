import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 PMSSS. All Rights Reserved.</p>
      <ul className="footer-links">
        <li>
          <Link to='/'>Privacy Policy</Link>
        </li>
        <li>
          <Link to='/'>Terms & Conditions</Link>
        </li>
        <li>
          <Link to='/'>Contact Us</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
