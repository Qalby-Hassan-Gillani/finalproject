import React, { useState } from 'react';
import Newaccount from './components/Newaccount';
import Main from './components/Main';
import About from './components/About';
import Navbar from './components/Navbar';
import PhotoGallery from './components/PhotoGallery';
import Footer from './components/Footer';
import './App.css'; // Import your custom CSS for styling

function App() {
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleCreateAccountClick = () => {
    setIsCreatingAccount(!isCreatingAccount); // Toggle account creation state
  };

  const handleLoginClick = () => {
    // Implement your login logic here
    setIsLoggedIn(!isLoggedIn); // Toggle login state
  };

  const product = [
    {
      id: 1,
      imageSrc: "image1.jpg",
      description: "Beautiful cream cake decorated with beautiful heart toppers.",
      price: "$10.99"
    },
    {
      id: 2,
      imageSrc: "image2.jpg",
      description: "Chocolate cake decorated with cherries and butter cream.",
      price: "$15.99"
    },
    {
      id: 3,
      imageSrc: "img5.jpg",
      description: "Cream cake decorated with chocolate dripping and pieces of Dairy Milk chocolates.",
      price: "$15.99"
    },
    {
      id: 4,
      imageSrc: "img4.jpg",
      description: "Beautiful coffee caake decorated with candles and coconut cruch pieces.",
      price: "$15.99"
    },
    {
      id: 5,
      imageSrc: "image5.jpg",
      description: "Dark chocolate moose cake made with tripple coating of chocolate dripping and ganash.",
      price: "$15.99"
    },
    {
      id: 6,
      imageSrc: "image4.jpg",
      description: "Butter cream cake decorated with flowers.",
      price: "$15.99"
    },
    {
      id: 7,
      imageSrc: "img7.jpg",
      description: "Fancy heighted 5 pounds birthday cakes.",
      price: "$15.99"
    },
    {
      id: 8,
      imageSrc: "img8.jpg",
      description: "Heighted Chocolate coffee cake decorated with chocolate colored cream.",
      price: "$15.99"
    },
    {
      id: 9,
      imageSrc: "img6.jpg",
      description: "Beautiful simple coconut almond cream cake decorated with fancy colored cream.",
      price: "$15.99"
    },
  ];

  return (
    <div className="App">
      <Navbar
        handleCreateAccountClick={handleCreateAccountClick}
        handleLoginClick={handleLoginClick}
      />
      <Main />
      <About />
      <div className="gallery-container">
        <h1>Visit our website and select stunning, beautiful, and delicious cakes for your loved ones.</h1>
        <div className="product-grid">
          {/* Map over the products array to render each item */}
          {product.map(product => (
            <PhotoGallery
              key={product.id} // Ensure each item has a unique key
              imageSrc={product.imageSrc}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </div>
      {/* Conditionally render Newaccount component based on state */}
      {isCreatingAccount && <Newaccount />}
      <Footer />
    </div>
  );
}

export default App;
