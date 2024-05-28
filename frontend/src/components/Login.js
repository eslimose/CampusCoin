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
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', response.data.username); // Store username if needed
        navigate('/Dashboard'); // Redirect to dashboard
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
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
