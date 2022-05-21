import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <div className="text">
        <span>HI,</span>
        <div>I'M <span className="name">RAHUL</span></div>
        <span style={{color:'#fff',fontSize:'20px'}}>SOFTWARE DEVELOPER</span>

        <Link style={{fontSize:'20px'}} to='/conatct'>CONTACT ME</Link>
      </div>
      <div className="green"></div>
    </div>
  );
};

export default Home;
