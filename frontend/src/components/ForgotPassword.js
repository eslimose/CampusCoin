import React, { useState } from 'react';
import api from '../api'; // Import the API utility
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/forgot-password', { email });
      setMessage(response.data.message);
      setTimeout(() => navigate('/reset-password'), 3000); // Redirect to reset password page after 3 seconds
    } catch (error) {
      setMessage('Error sending reset link');
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="left-section">
        <h1>Reset Your Password</h1>
        <p>Enter your email to receive a password reset link.</p>
      </div>
      <div className="right-section">
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send Reset Link</button>
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ForgotPassword;
