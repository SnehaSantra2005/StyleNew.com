import React from "react";
import "./Hero.css";
import hero_image from "../Assets/hero_image9.png";


const Hero = () => {
  return (
    <div className="hero">

      <div className="hero-right">
        <img src={hero_image} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
