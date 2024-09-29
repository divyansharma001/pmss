import React, { useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import AICTE_Logo from "../../../public/logo_new.png";
import Moe_logo from "../../../public/MOE_logo.png";

const Navbar = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown
  const location = useLocation();
  
  const toggleMegaMenu = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar z-10 w-full">
      <div className="navbar-logo-container">
        <Link to="/">
          <img src={AICTE_Logo} alt="AICTE Logo" className="navbar-logo-img cursor-pointer" />
        </Link>
        <Link to="/">
          <img
            src={Moe_logo}
            alt="Ministry of Education Logo"
            className="navbar-logo-img cursor-pointer"
          />
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
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
                    <a href="/faqs">FAQs</a>
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
          <a href="/contact">Contact Us</a>
        </li>
      </ul>
      <div className="auth-buttons">
      {location.pathname.includes("/signin") ? null:
        <div 
          className="relative" 
          onMouseEnter={toggleDropdown} 
          onMouseLeave={toggleDropdown}
        >
          <Link to="#" className="auth-btn">
            Sign In
          </Link>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
              <Link to="/signin" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">As Student</Link>
              <Link to="/dashboard" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">As Admin</Link>
            </div>
          )}
        </div>}
        {location.pathname.includes("/signin") ? (
          <Link to="/signup" className="auth-btn">
            Sign Up
          </Link>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
