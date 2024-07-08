import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/admin/users', {
          headers: {
            'x-auth-token': token,
          },
        });
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
        navigate('/login');
      }
    };

    fetchUsers();
  }, [navigate]);

  const handleDeleteUser = async (userId) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`http://localhost:3000/api/admin/users/${userId}`, {
        headers: {
          'x-auth-token': token,
        },
      });
      setUsers(users.filter(user => user._id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="admin-page">
      <h2>Admin Dashboard</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>
                <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
