import React from "react";
import "./Skills.css";
import cpp from "../../Assets/icons8-c++-144.png";
import html from "../../Assets/icons8-html-5-144.png";
import css from "../../Assets/icons8-css3-144.png";
import js from "../../Assets/icons8-javascript-144.png";
import nodejs from "../../Assets/icons8-nodejs-144.png";

const Skills = () => {
  return (
    <div id="Skills">
      <h1>Skills</h1>
      <div className="skill-container">
        <img src={cpp} alt="" />
        <img src={html} alt="" />
        <img src={css} alt="" />
        <img src={js} alt="" />
        <img src={nodejs} alt="" />
      </div>
    </div>
  );
};

export default Skills;
