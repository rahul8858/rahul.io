import React from 'react';
import './About.css';
import img from '../image/cimc.png';
import resume from '../image/Rahul_s_Resume.pdf';

const About = () => {
  return (
    <div className='About' id='About'>
      <h1>About Me</h1>
      <div className='aboutme'>
        <div className='img'><img src={img} alt="" /></div>
        <div className='para'>
          <span >Hardworking College Student seeking employment. Bringing forth a motivated attitude and a variety of powerful skills. Adept in various social media platforms and office technology programs. Committed to utilizing my skills to further the mission of a company.</span>
          <button className='button'><a href={resume} style={{textDecoration:'none',color:'white',fontSize:'1.5vmax'}}>Download</a></button>
        </div>
      </div>
    </div>
  )
}

export default About
