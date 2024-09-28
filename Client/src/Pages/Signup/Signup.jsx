import React from "react";
import "./Signup.css"; // Import the CSS file
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="page-container">
      <div className="signup-container">
        <div className="signup-left">
          <h2>Join the Scholarship Portal!</h2>
          <p>
            Create an account to start your scholarship application, upload your documents, and stay updated on the status of your scholarship. We are excited to support your academic success!
          </p>
          <Link to='/signin' className="signin-link">
            Already have an account? Sign in.
          </Link>
        </div>
        <div className="signup-right">
          <h2>Sign Up</h2>
          <form>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <Link to='/signin'><button type="submit">Sign Up</button></Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
