import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const toggleMegaMenu = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen);
  };

  return (
    <nav className="navbar">
     <Link to='/'><div className="navbar-logo">PMSSS</div></Link> 
      <ul className="navbar-links">
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li
          className="has-mega-menu"
          onMouseEnter={toggleMegaMenu}
          onMouseLeave={toggleMegaMenu}
        >
          <a href="#about">About PMSSS</a>
          {isMegaMenuOpen && (
            <div className="mega-menu">
              <div className="mega-menu-column">
                <h4>Information</h4>
                <ul>
                  <li>
                    <a href="#application-guidelines">Application Guidelines</a>
                  </li>
                  <li>
                    <a href="#scholarship-amount">Scholarship Amount</a>
                  </li>
                </ul>
              </div>
              <div className="mega-menu-column">
                <h4>Institutions</h4>
                <ul>
                  <li>
                    <a href="#institutions">Participating Institutions</a>
                  </li>
                  <li>
                    <a href="#documents-required">Documents Required</a>
                  </li>
                </ul>
              </div>
              <div className="mega-menu-column">
                <h4>Support</h4>
                <ul>
                  <li>
                    <a href="#contact-support">Contact Support</a>
                  </li>
                  <li>
                    <a href="#faqs">FAQs</a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </li>
        <li>
          <a href="#eligibility">Eligibility</a>
        </li>
        <li>
          <a href="#application">Application Process</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
