import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = ({ handleCreateAccountClick, handleLoginClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false); // State for showing alert
  const [alertType, setAlertType] = useState(null); // State for determining alert type
  const [isAccountCreated, setIsAccountCreated] = useState(false); // State for account creation success message
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for login success message
  const navbarRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleCreateAccount = () => {
    setShowAlert(true); // Show the alert when creating account is clicked
    setAlertType('createAccount');
    handleCreateAccountClick(); // Call parent function if needed
  };

  const handleLogin = () => {
    setShowAlert(true); // Show the alert when login is clicked
    setAlertType('login');
    handleLoginClick(); // Call parent function if needed
  };

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    if (alertType === 'createAccount') {
      // Simulate account creation
      setIsAccountCreated(true);
    } else if (alertType === 'login') {
      // Simulate login
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar-container">
      {!isOpen && (
        <button className="menu-button" onClick={toggleNavbar}>
          ☰
        </button>
      )}
      <nav ref={navbarRef} className={`navbar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#container">Images Gallery</a></li>
          <li><a href="#services">Services Provided</a></li>
          <li>
            <a
              href="#alert"
              className="navbar-button"
              onClick={handleCreateAccount}
            >
              Create New Account
            </a>
          </li>
          <li>
            <a
              href="#login"
              className="navbar-button"
              onClick={handleLogin}
            >
              Login
            </a>
          </li>
        </ul>
      </nav>
      {/* Conditionally render the alert */}
      {showAlert && (
        <div className="alert-top">
          <div className="alert-content">
            <span className="close" onClick={() => setShowAlert(false)}>&times;</span>
            <div className="alert-message">
              {alertType === 'createAccount' ? (
                isAccountCreated ? (
                  <div className="success-message">
                    <h2>Account Created Successfully</h2>
                    <p>Your account has been created. You can now log in.</p>
                  </div>
                ) : (
                  <form className="create-account-form" onSubmit={handleFormSubmit}>
                    <div className="form-group">
                      <label htmlFor="username">Username:</label>
                      <input type="text" id="username" name="username" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password:</label>
                      <input type="password" id="password" name="password" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="confirm-password">Confirm Password:</label>
                      <input type="password" id="confirm-password" name="confirm-password" required />
                    </div>
                    <button type="submit">Create Account</button>
                  </form>
                )
              ) : (
                isLoggedIn ? (
                  <div className="success-message">
                    <h2>User Logged In Successfully</h2>
                    <p>Welcome back! You have logged in successfully.</p>
                  </div>
                ) : (
                  <form className="login-form" onSubmit={handleFormSubmit}>
                    <div className="form-group">
                      <label htmlFor="login-username">Username:</label>
                      <input type="text" id="login-username" name="username" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="login-password">Password:</label>
                      <input type="password" id="login-password" name="password" required />
                    </div>
                    <button type="submit">Login</button>
                  </form>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
