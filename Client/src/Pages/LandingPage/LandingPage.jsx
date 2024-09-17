import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Empowering Education through PMSSS</h1>
          <p>Providing scholarships to deserving students across India.</p>
          <button className="cta-button">Apply Now</button>
          <button className="cta-button secondary">Learn More</button>
        </div>
      </header>

      {/* Scrolling Ticker */}
      <div className="ticker">
        <div className="ticker-content">
          <p>
            Latest Updates: Application Deadline Extended to 30th September |
            New Institutions Added | Scholarship Amount Increased for 2024
          </p>
        </div>
      </div>

      {/* Additional sections can be added here */}
    </div>
  );
};

export default LandingPage;
