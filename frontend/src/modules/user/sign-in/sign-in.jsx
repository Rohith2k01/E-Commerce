import React from 'react';
import './sign-in.css';

const SignInPage = () => {
  return (
    <div style={{ fontFamily: 'Manrope' }} className="background-image">
      <div className="card">
        <img src="../img/cross-ash.svg" alt="Close" className="close-icon" />
        <h2 className="heading">Sign In</h2>
        <div className="input-feild-wrapper">
          <p className="in-name">Email or Phone Number</p>
          <input type="text" placeholder="" className="input-field" />

          <p className="in-name">Password</p>
          <div className="password-field">
            <input type="password" placeholder="" className="input-field" />
            <img src="../img/eye.svg" alt="Show Password" className="eye-icon" />
          </div>

          <a href="../home/home.html">
            <button className="sign-up-button">Sign In</button>
          </a>
          <p className="sign-in-text">
            Don’t have an account?{' '}
            <a href="/home/" className="sign-in-link">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;