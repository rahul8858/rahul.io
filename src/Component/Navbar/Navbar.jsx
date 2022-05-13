import React from "react";
import "./Navbar.css";
import { HashLink } from "react-router-hash-link";
/*import {AiOutlineMenu} from 'react-icons/ai';
import { IconContext } from "react-icons";
*/
const Navbar = () => {
  return (
    <div className="nav">
      <span>rahul.io</span>
      <ul className="ul">
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
{/*       
        <IconContext.Provider value={{style:{fontSize:'4vmin'}}}>
          <div className="menu"><AiOutlineMenu/></div>
        </IconContext.Provider> */}
    </div>
  );
};

export default Navbar;
