import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="filler">PERSE</div>
      <div className="logo">
        <h1>
          <Link to="/">SUPACOOL</Link>
        </h1>
      </div>
      <div className="cart">
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
