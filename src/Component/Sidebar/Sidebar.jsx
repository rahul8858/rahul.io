import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineMenu, AiFillMessage } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
    const click = (e)=>{
        // console.log(e);
        const list=document.getElementsByTagName('li');
        for(let i=0;i<list.length;i++){
            list[i].className=list[i].classList.remove('active');
        }
        e.currentTarget.classList.add('active');
    }
  return (
    <div className="sidebar">
      <div id="menuIcon">
        <IconContext.Provider
          value={{ style: { fontSize: "5vh", color: "white" } }}
        >
          <AiOutlineMenu />
        </IconContext.Provider>
      </div>
      <ul>
        <li onClick={click} className='active'>
          <NavLink to="/">
            <IconContext.Provider
              value={{ style: { fontSize: "5vh", color: "white" } }}
            >
              <FaHome />
            </IconContext.Provider>
          </NavLink>
        </li>
        <li onClick={click} className=''>
          <NavLink to="/about">
            <IconContext.Provider
              value={{ style: { fontSize: "5vh", color: "white" } }}
            >
              <IoMdPerson />
            </IconContext.Provider>
          </NavLink>
        </li>
        <li onClick={click} className=''>
          <NavLink to="/project">
            <IconContext.Provider
              value={{ style: { fontSize: "5vh", color: "white" } }}
            >
              <MdOutlineWork />
            </IconContext.Provider>
          </NavLink>
        </li>
        <li onClick={click} className=''>
          <NavLink to="/skill">
            <IconContext.Provider
              value={{ style: { fontSize: "5vh", color: "white" } }}
            >
              <IoSettingsSharp />
            </IconContext.Provider>
          </NavLink>
        </li>
        <li onClick={click} className=''>
          <NavLink to="/contact">
            <IconContext.Provider
              value={{ style: { fontSize: "5vh", color: "white" } }}
            >
              <AiFillMessage />
            </IconContext.Provider>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
