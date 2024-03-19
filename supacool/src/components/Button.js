import React from 'react';
import './Button.css'; // Oletetaan, että luot erillisen CSS-tiedoston tyyleille

const Button = ({ children, onClick, className = '' }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
