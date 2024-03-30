import React from 'react';
import './AboutMe.css';
import aboutMeData from '../../Data/aboutme.json'; // Adjust the path as necessary
import profilePic from '../../assets/profile-pic.jpg';
function AboutMe() {
  return (
    <div className="about-container">
      <div className="left-side">
        <h1>{aboutMeData.intro}</h1>
        <img src={profilePic} alt="Doug" className="doug-image" />
      </div>
      <div className="right-side">
        {aboutMeData.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export default AboutMe;