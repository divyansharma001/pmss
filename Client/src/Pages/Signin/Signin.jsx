import React from "react";
import "./Signin.css"; // Import the CSS file
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="page-container">
      <div className="signin-container">
        <div className="signin-left">
          <h2>Scholarship Sign In</h2>
          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div className="flex flex-col gap-2">
              <Link to="/apply">
                <button type="submit">Sign In(Demo Version)</button>
              </Link>
              <Link to="/dashboard">
                <button type="submit">Sign In(Admin Demo Version)</button>
              </Link>
            </div>
          </form>
        </div>
        <div className="signin-right">
          <h2>Welcome to the Scholarship Portal!</h2>
          <p>
            Sign in to access your scholarship applications, track your status,
            and manage your documents. We are committed to supporting your
            academic journey.
          </p>
          <Link to="/signup" className="signup-link">
            Don't have an account? Sign up for the Scholarship Portal.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
