// src/pages/Signup.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export default function Signup() {
  const handleSignup = (e) => {
    e.preventDefault();
    alert("Sign Up Clicked");
  };

  return (
    <div className="login-container">
      <h2>Helpdesk System</h2>
      <p>Sign up here</p>

      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <input type="email" placeholder="Email" required />

        <button type="submit">Sign Up</button>
      </form>

      <div className="links">
        <a href="/forgetpassword">Forgot password</a>
        <Link to="/">Sign In</Link>
      </div>
    </div>
  );
}
