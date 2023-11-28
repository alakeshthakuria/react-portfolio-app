import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Styles/AboutMe.css';

function AboutMe() {
        const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/projects');
  };

  return (
    <div id="about" className="about-me-container">
      <h2 className="about-me-header">About Me</h2>
      <p className="about-me-content">
        Hello! I'm Alakesh Thakuria, an IT Engineer with four years of experience. I am passionate about exploring and working with technologies such as Cloud Computing (AWS), Docker, Kubernetes, Terraform, and Ansible. I thrive on challenges and am committed to continuous learning to stay updated with the latest industry trends.
      </p>
          <button button className="about-me-button" onClick={handleButtonClick}>Go to Projects</button>
    </div>
  );
}

export default AboutMe;
