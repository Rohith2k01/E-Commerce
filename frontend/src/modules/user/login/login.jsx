import React from 'react';
import './login.module.css';

const LoginPage = () => {
  return (
    <div style={{ fontFamily: 'Manrope' }} className="background-image">
      <div className="card">
        <img src="../img/cross-ash.svg" alt="Close" className="close-icon" />
        <h2 className="heading">Sign Up</h2>
        <div className="input-feild-wrapper">
          <p className="in-name">Name</p>
          <input type="text" placeholder="" className="input-field" />

          <p className="in-name">Email or Phone Number</p>
          <input type="text" placeholder="" className="input-field" />

          <p className="in-name">Password</p>
          <div className="password-field">
            <input type="password" placeholder="" className="input-field" />
            <img src="../img/eye.svg" alt="Show Password" className="eye-icon" />
          </div>

          <button className="sign-up-button">Sign Up</button>
          <p className="sign-in-text">
            Already have an account?{' '}
            <a href="../sign-in/sign-in.html" className="sign-in-link">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;