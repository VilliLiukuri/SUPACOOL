import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Oletetaan, että luot myös Home.css tyylitiedoston

function Home() {
  return (
    <div className="home">
      <div className="navigation-links">
        <Link to="/shop" className="nav-link">SHOP</Link>
        <Link to="/media" className="nav-link">MEDIA</Link>
      </div>
    </div>
  );
}

export default Home;