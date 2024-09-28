import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./LandingPage.css"; // Assuming you already have the necessary styles
import heroImg from "../../../public/Hero-img.jpg";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section with Carousel */}
      <header className="hero">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={5000}
        >
          {/* Slide 1 */}
          <div className="carousel-slide">
            <img src={heroImg} alt="Scholarship Banner" />{" "}
            {/* Update the image path */}
          </div>
          {/* Slide 2 */}
          <div className="carousel-slide">
            <img src={heroImg} alt="Scholarship Banner" />
          </div>
          {/* Slide 3 */}
          <div className="carousel-slide">
            <img src={heroImg} alt="Scholarship Banner" />
          </div>
          {/* Slide 4 */}
          <div className="carousel-slide">
            <img src={heroImg} alt="Scholarship Banner" />
          </div>
        </Carousel>
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
