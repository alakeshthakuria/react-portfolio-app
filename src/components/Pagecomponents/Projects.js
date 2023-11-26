import React from 'react';
import { useNavigate } from 'react-router-dom';

function Projects() { 
	const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/about');
  };

  return (
    <div>
      <h2>Projects</h2>
      <p>These are some of the projects I've worked on.</p>
      <button onClick={handleButtonClick}>Go to AboutMe</button>
    </div>
  );
}

export default Projects;

