import React from "react";
import "./Contact.css";
import { IconContext } from "react-icons";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact" style={{ backgroundColor: "black" }}>
      <div className="paracontact">
        <h1>CONTACT ME</h1>
        <div>
        Please contact me if you have any <span className="name">Internship</span> or <span className="name">Freelancing</span> opportunities that fit my skillset.
        </div>
        <div className="logo">
          <IconContext.Provider
            value={{ style: { fontSize: "9.5vh", color: "white" } }}
          >
            <div>
              <a
                href="https://www.linkedin.com/in/rahul-gupta-a02393193/"
                style={{ color: "blue" }}
              >
                <IoLogoLinkedin />
              </a>
              {/* <span className="name">LinkedIn</span> */}
            </div>
          </IconContext.Provider>
          <IconContext.Provider
            value={{ style: { fontSize: "8vh", color: "white" } }}
          >
            <div>
              <a href="https://github.com/rahul8858" style={{ color: "black" }}>
                <IoLogoGithub />
              </a>
              {/* <span className="name">GitHub</span> */}
            </div>
          </IconContext.Provider>
          <IconContext.Provider
            value={{ style: { fontSize: "10vh", color: "white" } }}
          >
            <div>
              <a href="mailto:rg3056052@gmail.com" style={{ color: "#2155CD" }}>
                <MdEmail />
              </a>
              {/* <span className="name">Email</span> */}
            </div>
          </IconContext.Provider>
        </div>
      </div>
      <div className="green"></div>
    </div>
  );
};

export default Contact;
