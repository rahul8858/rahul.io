import React from "react";
import "./Hero.css";
import Resume from '../../Assets/My_resume_2.pdf';

const Hero = () => {
  return (
    <div className="Hero">
      <div className="text">
        <span>Hi</span>
        <div>I'm <span className="name">Rahul</span></div>
        <span>Software Developer</span>
        <a href={Resume} download>Resume</a>
      </div>
      <div className="green"></div>
    </div>
  );
};

export default Hero;
