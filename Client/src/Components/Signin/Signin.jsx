import React from "react";
import "./Signin.css"; // Import the CSS file

const Signin = () => {
  return (
    <div className="page-container">
      <div className="signin-container">
        <div className="signin-left">
          <h2>Signin</h2>
          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Signin</button>
          </form>
          <p className="social-text">or signin with</p>
          <div className="social-signin">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-google-plus"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="signin-right">
          <h2>Welcome back!</h2>
          <p>
            Welcome back! We are so happy to have you here. It's great to see
            you again. We hope you had a safe and enjoyable time away.
          </p>
          <a href="#" className="signup-link">
            No account yet? Signup.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signin;
