import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProfilePage.css';

const ProfilePage = () => {
  const [userData, setUserData] = useState({});
  const [profilePhoto, setProfilePhoto] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }
        const response = await axios.get('http://localhost:3000/api/upload/profile', {
          headers: {
            'x-auth-token': token,
          },
        });
        setUserData(response.data);
        setProfilePhoto(response.data.profilePhoto);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchProfile();
  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('profilePhoto', selectedFile);

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }
      const response = await axios.post('http://localhost:3000/api/upload/photo', formData, {
        headers: {
          'x-auth-token': token,
          'Content-Type': 'multipart/form-data',
        },
      });
      setProfilePhoto(response.data.profilePhoto);
      setSelectedFile(null);
    } catch (error) {
      console.error('Error uploading photo:', error);
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-photo-section">
          <div className="profile-photo">
            <img src={profilePhoto || 'default-profile.png'} alt="Profile" />
          </div>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleUpload}>Upload new image</button>
        </div>
        <div className="user-details">
          <div className="user-detail">
            <label>First Name:</label>
            <input type="text" value={userData.firstName || ''} readOnly />
          </div>
          <div className="user-detail">
            <label>Last Name:</label>
            <input type="text" value={userData.lastName || ''} readOnly />
          </div>
          <div className="user-detail">
            <label>Username:</label>
            <input type="text" value={userData.username || ''} readOnly />
          </div>
          <div className="user-detail">
            <label>Email:</label>
            <input type="text" value={userData.email || ''} readOnly />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
