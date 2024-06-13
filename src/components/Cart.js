import React, { useState } from 'react';
import './Cart.css'; // Import CSS for styling

const Cart = ({ cartItems, totalPrice, onUpdateQuantity, onClose }) => {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false); // State for handling checkout success message

  const handleCheckout = () => {
    setIsOrderPlaced(true);
    // You can also handle other checkout logic here, such as API calls, etc.
  };

  return (
    <div className="cart-container">
      {isOrderPlaced ? (
        <div className="order-success-message">
          <h2>Order Placed Successfully</h2>
          <p>You have successfully placed the order. We will get back to you soon on your email.</p>
          <button className="close-button" onClick={onClose}>Close</button>
        </div>
      ) : (
        <>
          <div className="cart-header">
            <h2>Your Cart</h2>
            <span className="close" onClick={onClose}>
              &times;
            </span>
          </div>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.imageSrc} alt={item.description} className="cart-item-image" />
                <div className="cart-item-details">
                  <p className="cart-item-description">{item.description}</p>
                  <p className="cart-item-quantity">
                    Quantity: {item.quantity}{' '}
                    <button className="quantity-btn" onClick={() => onUpdateQuantity(index, item.quantity - 1)}>
                      -
                    </button>
                    <button className="quantity-btn" onClick={() => onUpdateQuantity(index, item.quantity + 1)}>
                      +
                    </button>
                  </p>
                  <p className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-footer">
            <p>Total: ${(totalPrice).toFixed(2)}</p> {/* Ensure total price is formatted */}
            <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
