import React from 'react';
import './Media.css'; // Oletetaan, että luot myös Media.css tyylitiedoston

function Media() {
  return (
    <div className="Media">
      <h1>MEDIA</h1>
      <div className="video-list">
        {/* Esimerkki staattisesta videolista */}
        <div className="video-item">
          <h3>Video 1</h3>
          <p>Kuvaus Mediata 1.</p>
        </div>
        <div className="video-item">
          <h3>Video 2</h3>
          <p>Kuvaus Mediata 2.</p>
        </div>
        {/* Lisää videoita tarpeen mukaan */}
      </div>
    </div>
  );
}

export default Media;
