// src/pages/Login.jsx
import React from 'react';
import '../index.css';
import { Link, useNavigate } from 'react-router-dom'; // ✅ add useNavigate

export default function Login() {
  const navigate = useNavigate(); // ✅ hook for programmatic navigation

  const handleSignIn = () => {
    // You can add authentication logic here
    navigate('/dashboard'); // Redirect to dashboard
  };

  return (
    <div className="login-container">
      <h2>Helpdesk System</h2>

      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />

      <button onClick={handleSignIn}>Sign In</button> {/* ✅ now clickable */}

      <div className="links">
        <a href="/forgetpassword">Forgot password</a>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}
