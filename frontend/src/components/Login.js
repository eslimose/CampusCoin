import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const userCredentials = {
      email,
      password
    };

    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', userCredentials);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', response.data.user.username);
      navigate('/dashboard'); // Redirect to dashboard upon successful login
    } catch (error) {
      setMessage('Login failed. Please check your credentials and try again.');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
      <div className="link">
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>
      <div className="link">
        <Link to="/signup">Don't have an account? Sign up</Link>
      </div>
    </div>
  );
};

export default Login;
