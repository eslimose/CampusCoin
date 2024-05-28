import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ActivateAccount.css';

const ActivateAccount = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const handleActivation = async () => {
    try {
      const response = await axios.get(`/api/auth/activate/${token}`);
      if (response.data.success) {
        setMessage(response.data.message);
        setTimeout(() => {
          navigate(`/reset-password/${token}`);
        }, 3000);
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  useEffect(() => {
    handleActivation();
  }, []);

  return (
    <div className="activate-account-container">
      <h2>Account Activation</h2>
      <p>{message}</p>
    </div>
  );
};

export default ActivateAccount;
