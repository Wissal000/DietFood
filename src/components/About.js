import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";


const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
          A balanced diet is crucial for overall health, providing essential nutrients, vitamins, and minerals.
        </p>
        <p className="primary-text">
          you support both physical and mental well-being. Making mindful food choices helps you enjoy tasty meals while meeting your body's needs for a healthier, more vibrant life!
        </p>
        <div className="about-buttons-container">
        </div>
      </div>
    </div>
  );
};

export default About;