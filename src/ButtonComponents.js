// ButtonComponent.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function ButtonComponent() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(targetRoute);
  };

  return (
    <button onClick={handleButtonClick}>Click me</button>
  );
}

export default ButtonComponent;

