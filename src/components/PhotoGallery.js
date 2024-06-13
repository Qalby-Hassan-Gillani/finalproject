import React, { useState } from 'react';
import './PhotoGallery.css'; // Import your custom CSS for styling
import Cart from './Cart'; // Import Cart component

const PhotoGallery = ({ imageSrc, description, price }) => {
  const [showCreateAccountAlert, setShowCreateAccountAlert] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [accountCreated, setAccountCreated] = useState(false); // State to track account creation

  const handleOrderNowClick = () => {
    setShowCreateAccountAlert(true); // Show the alert for creating an account
  };

  const handleCloseAlert = () => {
    setShowCreateAccountAlert(false); // Close the alert
  };

  const handleAddToCart = () => {
    const newItem = { imageSrc, description, price: parseFloat(price), quantity: 1 };
    const updatedCartItems = [...cartItems];

    // Check if item already exists in cart
    const existingItemIndex = updatedCartItems.findIndex(item => item.description === description);

    if (existingItemIndex !== -1) {
      // Item already exists, update quantity
      updatedCartItems[existingItemIndex].quantity++;
    } else {
      // Item doesn't exist, add to cart
      updatedCartItems.push(newItem);
    }

    // Calculate total price
    const newTotalPrice = updatedCartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    // Update state
    setCartItems(updatedCartItems);
    setTotalPrice(newTotalPrice);
    setCartOpen(true); // Open the cart
  };

  const handleCreateAccount = () => {
    // Simulating account creation success for demonstration
    setTimeout(() => {
      setAccountCreated(true); // Set account creation status to true
    }, 1000); // Delay added to simulate API call or process

    setShowCreateAccountAlert(false); // Close the alert after creating account
  };

  const handleUpdateQuantity = (index, newQuantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = newQuantity;

    // Calculate total price
    const newTotalPrice = updatedCartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    // Update state
    setCartItems(updatedCartItems);
    setTotalPrice(newTotalPrice);
  };

  return (
    <div className="product-container" id="container">
      <img src={imageSrc} alt="Product" className="product-image" />
      <div className="product-details">
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
        <button className="order-now-button" onClick={handleOrderNowClick}>
          Order Now
        </button>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>

      {/* Alert for creating account */}
      {showCreateAccountAlert && (
        <div className="alert-top">
          <div className="alert-content">
            <span className="close" onClick={handleCloseAlert}>
              &times;
            </span>
            <div className="alert-message" id="alert">
              {!accountCreated ? (
                <>
                  <h2>Create Account</h2>
                  <p>
                    Please create an account first to order products from the
                    website.
                  </p>
                  <input type="text" placeholder="Username" />
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <button onClick={handleCreateAccount}>Create Account</button>
                </>
              ) : (
                <>
                  <h2>Account Created!</h2>
                  <p>
                    Account created successfully! Now you can place your order.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Cart component */}
      {cartOpen && (
        <Cart
          cartItems={cartItems}
          totalPrice={totalPrice}
          onUpdateQuantity={handleUpdateQuantity}
          onClose={() => setCartOpen(false)}
        />
      )}
    </div>
  );
};

export default PhotoGallery;
