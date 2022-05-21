import React from "react";
import "./Skills.css";
import cpp from "../../Assets/icons8-c++-144.png";
import html from "../../Assets/icons8-html-5-144.png";
import css from "../../Assets/icons8-css3-144.png";
import js from "../../Assets/icons8-javascript-144.png";
import nodejs from "../../Assets/icons8-nodejs-144.png";

const Skills = () => {
  return (
    <div className="skills">
      <div className="paraskill">
        <br /><br />
      <h1>SKILLS</h1>
        I know the various skills related to web development and programming.
        e.g. <span className="name">C++</span>, <span className="name">HTML5</span>
        , <span className="name">CSS</span>, <span className="name">JS</span>,
        <span className="name">React.js</span> and <span className="name">Node.js</span>.
        <br /><br />
      </div>
      <div className="skill-container">
        <img src={cpp} alt="" />
        <img src={html} alt="" />
        <img src={css} alt="" />
        <img src={js} alt="" />
        <img src={nodejs} alt="" />
      </div>
      <div className="green"></div>
    </div>
  );
};

export default Skills;
