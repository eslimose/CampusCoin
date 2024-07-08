import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Activate from './components/Activate';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Dashboard from './components/Dashboard'; // Make sure this import is here
import FinancialData from './components/FinancialData'; // Ensure FinancialData is imported
import ProfilePage from './components/ProfilePage'; // Update this path
import Admin from './components/Admin'; // Add this line


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/activate/:token" element={<Activate />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Add this route */}
        <Route path="/financial-data" element={<FinancialData />} /> {/* Add this line */}
        <Route path="/profile" element={<ProfilePage />} /> {/* Add this route */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default App;
