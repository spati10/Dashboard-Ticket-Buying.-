// src/pages/Performance.jsx
import React from 'react';
import Sidebar from '../components/Sidebar1';
import '../index.css';

const Performance = () => {
  const teamData = [
    {
      name: "Operation Name 1",
      contact: "0123456789",
      department: "ABC",
      totalTickets: 5,
      solved: 2,
      pending: 1,
      progress: 2,
      rating: 4,
    },
    {
      name: "Operation Name 2",
      contact: "0123456789",
      department: "ABC",
      totalTickets: 5,
      solved: 2,
      pending: 1,
      progress: 2,
      rating: 5,
    },
    {
      name: "Operation Name 3",
      contact: "0123456789",
      department: "ABC",
      totalTickets: 5,
      solved: 2,
      pending: 1,
      progress: 2,
      rating: 3,
    },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="content-area">
        <div className="top-right-controls">
          <button className="btn-left">BM</button>
          <button className="btn-right">BI</button>
        </div>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Performance</h2>

        <div className="profile-row">
          {teamData.map((op, index) => (
            <div key={index} className="performance-card">
              <div className="avatar-placeholder">👤</div>
              <h3>{op.name}</h3>
              <p><strong>Contact:</strong> {op.contact}</p>
              <p><strong>Department:</strong> {op.department}</p>
              <button className="view-btn">View Details</button>
              <hr />
              <p><strong>Total Tickets Handled:</strong> {op.totalTickets}</p>
              <p>✔️ Ticket Solved: {op.solved}</p>
              <p>⏳ Ticket In Progress: {op.progress}</p>
              <p>❗ Ticket Pending: {op.pending}</p>
              <p><strong>Rating:</strong> {'⭐'.repeat(op.rating)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Performance;
