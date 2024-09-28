import React from "react";
import "./LandingPage.css";
import heroImg from "../../../public/hero.png"; // Update the path if necessary
import MileStone from "@/Components/Landingpage/mileStone";
import FlowChart from "@/Components/Landingpage/flowChart";
import Notice from "@/Components/Landingpage/notice";
import About from "@/Components/Landingpage/about";

const LandingPage = () => {
  return (
    <div className="landing-page overflow-x-hidden flex flex-col items-center">
      {/* Hero Section with Static Image */}
      <header className="hero">
        <div className="hero-image-container">
          <img src={heroImg} alt="Scholarship Banner" className="hero-image" />
          {/* Overlapping buttons */}
          <div className="hero-buttons">
            <button className="btn orange-btn">New User Registration</button>
            <button className="btn orange-btn">Track My Application</button>
          </div>
        </div>
      </header>

      {/* Scrolling Ticker */}
      <div className="ticker w-full">
        <div className="ticker-content">
          <p>
            Latest Updates: Application Deadline Extended to 30th September |
            New Institutions Added | Scholarship Amount Increased for 2024
          </p>
        </div>
      </div>
      <MileStone />
      <About />
      <FlowChart />
      <Notice />
    </div>
  );
};

export default LandingPage;
