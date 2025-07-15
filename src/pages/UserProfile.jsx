import React from 'react';
import '../index.css'; // keep this in src/pages/
import Sidebar from '../components/Sidebar1';
import personLogo from '../assets/images/person_logo.jpg';
// helpdesk-login\src\index.css

const UserProfile = () => {
  return (
    <div className="user-profile-container">
      <h2>User Profile</h2>
      <div className="profile-content">
        <div className="profile-card">
          <div className="avatar">
            <img src={personLogo} alt="User Avatar" />
          </div>
          <div className="user-info">
            <p><strong>Username</strong></p>
            <p>Contact Number</p>
            <p>Email</p>
            <p>Department</p>
          </div>
          <div className="edit-icon">📝</div>
        </div>

        <div className="feedback-card">
          <h4>Give Your Feedback</h4>
          <textarea
            className="feedback-text"
            placeholder="[Lorem Ipsum]"
            rows="2"
          ></textarea>
          <div className="stars">
            ★★★★★
          </div>
          <button className="submit-btn">Submit Feedback</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
