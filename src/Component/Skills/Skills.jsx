import React from 'react'
import Skill from './Skill.jsx';
import './Skills.css'

const skills=["C/C++","Data Structres and Algorithms","Web Development","Languages"];

const Skills = () => {
  return (
    <div id='Skills'>
    <h1>Skills</h1>
    <div className='flex-container'>
      {skills.map((skill)=>{
        return <Skill value={skill}/>
      })}
    </div>
    </div>
  )
}

export default Skills
