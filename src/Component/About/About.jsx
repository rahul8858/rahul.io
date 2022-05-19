import React from "react";
import "./About.css";
import { IconContext } from "react-icons";
import {IoLogoLinkedin,IoLogoGithub} from 'react-icons/io';
import {MdEmail} from 'react-icons/md';

const About = () => {
  return (
    <div id="about">
      <h1>About Me</h1>
      <div className="aboutme">
        <div className="para">
          I am a tech enthusiast, currently pursuing Bachelor of Technology at
          <span className="name"> Delhi Technological University</span>.
          Developing website <span className="name">Frontend</span> and
          <span className="name"> Backend</span> also. Currently finding a summer
          internship opportunity to work with the latest technologies on
          challenging and diverse projects. I'm quietly confident, naturally
          curious, and perpetually working on improving my chops one design
          problem at a time.
        </div>
        <div className="logo">
          <IconContext.Provider value={{ style: { fontSize: "9.5vh"} }}>
            <div>
              <a
                href="https://www.linkedin.com/in/rahul-gupta-a02393193/"
                style={{ color: "blue" }}
              >
                <IoLogoLinkedin />
              </a>
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ style: { fontSize: "8vh" } }}>
            <div>
              <a
                href="https://github.com/rahul8858"
                style={{ color: "black" }}
              >
                <IoLogoGithub />
              </a>
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{style:{fontSize:'10vh'}}}>
            <div>
              <a href="mailto:rg3056052@gmail.com"
              style={{color:"#2155CD"}}
              >
                <MdEmail/>
              </a>
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default About;
