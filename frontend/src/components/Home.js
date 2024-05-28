import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <header>
        <div className="logo">Your Logo</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#product">Product</a>
          <a href="#service">Service</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="nav-buttons">
          <a href="Signup" className="sign-up">Sign up</a>
          <a href="Login" className="sign-in">Sign in</a>
        </div>
      </header>
      <div className="banner">
        <div className="banner-text">
          <h1>FINANCIAL <span>MANAGEMENT</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a href="#learn-more" className="learn-more">Learn More</a>
        </div>
        <div className="banner-image">
          <img src="/public/bckground.jpeg" alt="Financial Management Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Home;
