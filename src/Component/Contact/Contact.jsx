import React from "react";
import "./Contact.css";
import { HashLink } from "react-router-hash-link";
import { IconContext } from "react-icons";
import {IoLogoLinkedin,IoLogoGithub,IoMdSend} from 'react-icons/io';


const Contact = () => {
  return (
    
    <div id="Contact">
          <div className="site-intro">
              <h1 className="site">rahul.io</h1>
              <span className="mytitle">Programmer and Developer</span>
          </div>
          <div style={{display:"flex"}} className="links">
          <ul className="sitemap">
            <span>Explore</span>
            <HashLink to="#About" smooth className="li">
              About
            </HashLink>
            <HashLink to="#Skills" smooth className="li">
              Skills
            </HashLink>
            <HashLink to="#Projects" smooth className="li">
              Projects
            </HashLink>
            <HashLink to="#Contact" smooth className="li">
              Contact
            </HashLink>
          </ul>
          <ul className="connect">
            <span>Connect With Me</span>
            <li>
              <IconContext.Provider value={{ style :{fontSize:'5vh'}}}>
                <div><a href="https://www.linkedin.com/in/rahul-gupta-a02393193/" style={{color:"white"}} target="_blank" rel="noreferrer"><IoLogoLinkedin/></a></div>
              </IconContext.Provider>
            </li>
            <li>
              <IconContext.Provider value={{ style :{fontSize:'5vh'}}}>
                <div><a href="https://github.com/rahul8858" style={{color:"white"}} target="_blank" rel="noreferrer"><IoLogoGithub/></a></div>
              </IconContext.Provider>
            </li>
          </ul>
        </div>
      <form action="mailto:rg3056052@gmail.com" method="post" className="form" tabIndex="_blank">
        <h1>Contact</h1>
        <div className="input">
          <label htmlFor="name">Name</label>
          <span></span>
          <input type="text" name="name" required valid />
          <span></span>
        </div>
        <div className="input">
          <label htmlFor="email">Email</label>
          <span></span>
          <input type="email" name="email" required valid/>
        </div>
        <div className="input">
          <label htmlFor="message">Message</label>
          <span></span>
          <input type="text" name="message" required/>
        </div>
        <button type="submit" value="send" className="btn">
          <IconContext.Provider value={{style:{fontSize:'5vh',display:"inline"}}}>
            <div>
              <IoMdSend/>
            </div>
          </IconContext.Provider>
        </button>
      </form>
      <div className="copy">&copy;2022 rahul.io : all rights reserverd.</div>
    </div>
  );
};

export default Contact;
