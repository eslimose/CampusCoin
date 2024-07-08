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
          <h1>CAMPUS <span>COIN</span></h1>
          <p>
          Welcome to Campus Coin – Your Personal Finance Coach! Manage your money smarter with our easy-to-use app tailored for university students. From budgeting and saving to tracking expenses and managing debt, Campus Coin empowers you to take control of your financial future. Start your journey towards financial independence today!</p>
          <a href="#learn-more" className="learn-more">Learn More</a>
        </div>
        <div className="banner-image">
          <img src="frontend\public\bckground.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
