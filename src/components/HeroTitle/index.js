import React from 'react';
import './index.css';

function HeroTitle() {
  return (
    <>
      <div className="hero-title hero-title--web">
        <p>What kind of</p>
        <p>Renovations</p>
        <p>are you planning?</p>
      </div>
      <div className="hero-title hero-title--mobile">
        <p>What kind of Renovations are you planning</p>
      </div>
    </>
  );
}

export default HeroTitle;
