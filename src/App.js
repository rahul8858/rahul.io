import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar.jsx";
import Hero from "./Component/Hero/Hero.jsx";
import About from "./Component/About/About.jsx";
import Skills from "./Component/Skills/Skills.jsx";
import Projects from "./Component/Projects/Projects.jsx";
import { BrowserRouter as Router} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
    </Router>
  );
};

export default App;
