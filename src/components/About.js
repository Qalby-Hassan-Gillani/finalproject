import React from 'react';
import './About.css'; // Import your custom CSS for styling

const About = () => {
  return (
    <div className="about-page">
      <div className="about-box">
        <div className="about-banner">
          <h1>About Cake Couture Creations</h1>
          <p>Welcome to Cake Couture Creations, where every cake tells a story of love, celebration, and creativity!</p>
        </div>
        <div className="about-content" id='about'>
          <div className="about-description">
            <h2>Our Story</h2>
            <p>At Cake Couture Creations, we believe that every occasion deserves a special touch. Our journey began with a passion for baking and a dream to create beautiful and delicious cakes that leave a lasting impression. From birthdays to weddings, anniversaries to corporate events, we strive to make every moment unforgettable with our exquisite creations.</p>
            <p>With years of experience and a commitment to excellence, our talented team of bakers and decorators pour their hearts into crafting custom-designed cakes that not only look stunning but taste divine too.</p>
          </div>
        </div>
        <div className="video-gallery">
          <h2>Video Gallery</h2>
          <div className="video-container">
            <video controls>
              <source src="video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video controls>
              <source src="video2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video controls>
              <source src="video3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
