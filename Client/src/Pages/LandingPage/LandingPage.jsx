import React from "react";
<<<<<<< HEAD
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./LandingPage.css"; // Assuming you already have the necessary styles
import heroImg from "../../../public/hero.png";
=======
import "./LandingPage.css";
import { Link } from "react-router-dom";
>>>>>>> 3b90dbc69724a5d6313bf5020af6d525c2ba5f7d

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section with Carousel */}
      <header className="hero">
<<<<<<< HEAD
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
=======
        <div className="hero-content">
          <h1>Empowering Education through PMSSS</h1>
          <p>Providing scholarships to deserving students across India.</p>
          <Link to='/signup'><button className="cta-button">Apply Now</button></Link>
          <button className="cta-button secondary">Learn More</button>
        </div>
>>>>>>> 3b90dbc69724a5d6313bf5020af6d525c2ba5f7d
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
