import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
//import { BsFillPlayCircleFill } from "react-icons/bs";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Healthy Lifestyle, Delivered
          </h1>
          
          <p className="primary-text">
            We deliver fresh, healthy meals made with natural ingredients — perfect for your diet, fitness goals, or just eating better every day
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
          {/* <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button> */}
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
