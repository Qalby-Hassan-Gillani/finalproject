import React from 'react';
import './Main.css'; // Import the CSS file for styling

const Main = () => {
  return (
    <div className="hero-section" id='home'>
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Cake Couture Creations</h1>
        <p className="hero-subtitle">Indulge in Sweet Moments Where Every Bite Tells a Story</p>
        <a href="#container" className="hero-button">Order Now</a>
      </div>
    </div>
  );
};

export default Main;