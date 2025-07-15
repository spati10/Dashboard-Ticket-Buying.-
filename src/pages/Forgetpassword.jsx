import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export default function ForgetPassword() {
  const handleReset = (e) => {
    e.preventDefault();
    alert("Reset link sent!");
  };

  return (
    <div className="forgot-container">
      <h2 className="forgot-text">Reset Your Password</h2>
      <form onSubmit={handleReset}>
        <input
          className="forgot-input"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button className="btn-green" type="submit">Send Reset Link</button>
      </form>

      <Link to="/" className="btn-blue">Back to Login</Link>
    </div>
  );
}
