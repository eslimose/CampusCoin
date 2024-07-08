import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Chart from 'chart.js/auto';
import './Dashboard.css';

const Dashboard = () => {
  const [username, setUsername] = useState('');
  const [financialData, setFinancialData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('username');
    if (user) {
      setUsername(user);
    } else {
      navigate('/login');
    }

    // Fetch user profile data
    axios.get('http://localhost:3000/api/upload/profile', {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
    })
    .then(response => {
      setProfilePhoto(response.data.profilePhoto);
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
    });

    // Fetch financial data
    axios.get('http://localhost:3000/api/financial-data', {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
    })
    .then(response => {
      setFinancialData(response.data);
      renderCharts(response.data);
    })
    .catch(error => {
      console.error('Error fetching financial data:', error);
    });
  }, [navigate]);

  const handleLogout = () => {
    setIsModalOpen(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    navigate('/login');
  };

  const cancelLogout = () => {
    setIsModalOpen(false);
  };

  const renderCharts = (data) => {
    // Expense by Category
    new Chart(document.getElementById('expenseByCategory'), {
      type: 'bar',
      data: {
        labels: data.expenseCategories.map(category => category.name),
        datasets: [{
          label: 'Amount',
          data: data.expenseCategories.map(category => category.amount),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      }
    });

    // Top 5 Expenses
    new Chart(document.getElementById('topExpenses'), {
      type: 'bar',
      data: {
        labels: data.topExpenses.map(expense => expense.name),
        datasets: [{
          label: 'Amount',
          data: data.topExpenses.map(expense => expense.amount),
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1
        }]
      }
    });

    // Net Amount
    new Chart(document.getElementById('netAmount'), {
      type: 'doughnut',
      data: {
        labels: ['Credit', 'Debit'],
        datasets: [{
          data: [data.netAmount.credit, data.netAmount.debit],
          backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)'],
          borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
          borderWidth: 1
        }]
      }
    });

    // Cashflow (Income)
    new Chart(document.getElementById('cashflowIncome'), {
      type: 'pie',
      data: {
        labels: data.cashflow.map(flow => flow.source),
        datasets: [{
          data: data.cashflow.map(flow => flow.amount),
          backgroundColor: ['rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
          borderColor: ['rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
          borderWidth: 1
        }]
      }
    });

    // Weekly Expenses
    new Chart(document.getElementById('weeklyExpenses'), {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Living Expenses',
          data: data.weeklyExpenses.living,
          backgroundColor: 'rgba(255, 159, 64, 0.2)',
          borderColor: 'rgba(255, 159, 64, 1)',
          borderWidth: 1
        }, {
          label: 'Discretionary',
          data: data.weeklyExpenses.discretionary,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }, {
          label: 'Transport',
          data: data.weeklyExpenses.transport,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      }
    });

    // Category Details
    new Chart(document.getElementById('categoryDetails'), {
      type: 'bar',
      data: {
        labels: data.categoryDetails.map(detail => detail.name),
        datasets: [{
          label: 'Amount',
          data: data.categoryDetails.map(detail => detail.amount),
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1
        }]
      }
    });
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="logo">Campus Coin</div>
        <div className="user-info">
          Welcome, {username}
          <Link to="/profile">
            <img src={profilePhoto || 'default-profile.png'} alt="Profile" className="profile-icon" />
          </Link>
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
      </header>
      <div className="dashboard-content">
        <div className="card expenses-by-category">
          <h3>Expenses by Category</h3>
          <canvas id="expenseByCategory"></canvas>
        </div>
        <div className="card top-expenses">
          <h3>Top 5 Expenses</h3>
          <canvas id="topExpenses"></canvas>
        </div>
        <div className="card net-amount">
          <h3>Net Amount</h3>
          <canvas id="netAmount"></canvas>
        </div>
        <div className="card cashflow-income">
          <h3>Cashflow (Income)</h3>
          <canvas id="cashflowIncome"></canvas>
        </div>
        <div className="card weekly-expenses">
          <h3>Weekly Expenses</h3>
          <canvas id="weeklyExpenses"></canvas>
        </div>
        <div className="card category-details">
          <h3>Category Details</h3>
          <canvas id="categoryDetails"></canvas>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Are you sure you want to logout?</h3>
            <button onClick={confirmLogout} className="confirm-button">Yes</button>
            <button onClick={cancelLogout} className="cancel-button">No</button>
          </div>
        </div>
      )}

      <Link to="/financial-data" className="financial-data-button">Enter Financial Data</Link>
    </div>
  );
};

export default Dashboard;
