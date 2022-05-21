import React from "react";
import "./About.css";
import Resume from "../../Assets/Resume.pdf";

const About = () => {
  return (
    <div className="about">
      <div className="aboutme">
        <h1>ABOUT ME</h1>
        <div className="para">
          I am a tech enthusiast, currently pursuing Bachelor of Technology at
          <span className="name"> Delhi Technological University</span>.
          Developing website <span className="name">Frontend</span> and
          <span className="name"> Backend</span> also. Currently looking for a
          summer internship opportunity to work with cutting-edge technologies
          on various and demanding projects. I'm calm confident, naturally
          interested, and always aiming to improve my design skills one design
          problem at a time.
        </div>
        <a href={Resume} download>
          RESUME
        </a>
      </div>
      <div className="green"></div>
    </div>
  );
};

export default About;
