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
      <ul>
        <HashLink to="#About" smooth className="link">
          <span className="li">About</span>
        </HashLink>
        <HashLink to="#Projects" smooth className="link">
          <span className="li">Projects</span>
        </HashLink>
        <HashLink to="#Skills" smooth className="link">
          <span className="li">Skills</span>
        </HashLink>
      </ul>
    </div>
  );
};

export default Navbar;
