// ButtonComponent.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function ButtonComponent() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleButtonClick = (targetRoute) => {
    navigate(targetRoute);
  };

  return (
    <div>
      <button
        className="projects-button"
        onClick={() => handleButtonClick('/about')}
        disabled={location.pathname === '/about'}
      >
        Go to AboutMe
      </button>
      <button
        className="about-me-button"
        onClick={() => handleButtonClick('/projects')}
        disabled={location.pathname === '/projects'}
      >
        Go to Projects
      </button>
    </div>
  );
}

export default ButtonComponent;

