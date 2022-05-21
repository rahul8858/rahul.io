import React from "react";
import "./App.css";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Sidebar from "./Component/Sidebar/Sidebar";

import Home from './Component/Home/Home';
import About from "./Component/About/About";
import Skills from "./Component/Skills/Skills";
import Project from "./Component/Projects/Project";
import Contact from './Component/Contact/Contact';

const App = () => {
  return (
    <div className="app">
    <Router>
    <Sidebar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="/skill" element={<Skills/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </Router>
    </div>
  );
};

export default App;
