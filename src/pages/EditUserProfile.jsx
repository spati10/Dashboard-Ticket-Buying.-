import React from 'react';
import '../index.css'; // make sure styles apply

const EditUserProfile = () => {
  return (
    <div className="user-profile-container">
      <h2 style={{ textAlign: 'center' }}>User Profile</h2>

      <div style={{
        backgroundColor: 'white',
        borderRadius: '10px',
        maxWidth: '700px',
        margin: '0 auto',
        padding: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
      }}>
        <div style={{
          backgroundColor: '#4dd0c9',
          padding: '10px 20px',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          color: 'white',
          fontWeight: 'bold'
        }}>
          Edit Account
        </div>

        <form style={{ padding: '20px' }}>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Current Password" />
          <input type="password" placeholder="New Password" />
          <input type="password" placeholder="Confirm Password" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Real Name" />
          <input type="text" placeholder="Access Level" />
          <input type="text" placeholder="Project Access Level" />

          <button type="submit">Update User</button>
        </form>
      </div>
    </div>
  );
};

export default EditUserProfile;
