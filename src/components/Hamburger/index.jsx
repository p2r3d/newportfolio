import React from 'react';
import './hamburger.scss'; 

const Hamburger = ({ isOpen, toggleMenu }) => {
  return (
    <button className={`burger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </button>
  );
};

export default Hamburger;
