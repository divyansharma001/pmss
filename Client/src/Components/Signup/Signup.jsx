import React from "react";
import "./Signup.css"; // Import the CSS file

const Signup = () => {
  return (
    <div className="page-container">
      <div className="signup-container">
        <div className="signup-left">
          <h2>Come join us!</h2>
          <p>
            We are so excited to have you here. If you haven't already, create
            an account to get access to exclusive offers, rewards, and
            discounts.
          </p>
          <a href="#" className="signin-link">
            Already have an account? Signin.
          </a>
        </div>
        <div className="signup-right">
          <h2>Signup</h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button type="submit">Signup</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
