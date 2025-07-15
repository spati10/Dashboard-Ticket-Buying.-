import React from 'react';
import Sidebar from '../components/Sidebar1';
import '../index.css'; // Make sure styles are included

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="content-area">
        {/* Header */}
        <div className="top-right-controls">
          <div className="toggle-group">
            <button className="btn-left">BM</button>
            <button className="btn-right">BI</button>
          </div>
          <span className="icon">🔔</span>
          <span className="icon">👤</span>
          <span className="icon">🔁</span>
        </div>

        {/* Dashboard Content */}
        <div className="dashboard-title">Dashboard</div>

        <div className="card-row">
          <div className="dashboard-card blue">
            <h4>Total Tickets</h4>
            <h1>12</h1>
          </div>
          <div className="dashboard-card green">
            <h4>Total Solved</h4>
            <h1>8</h1>
          </div>
          <div className="dashboard-card red">
            <h4>Total Awaiting Approval</h4>
            <h1>2</h1>
          </div>
          <div className="dashboard-card yellow">
            <h4>Total in Progress</h4>
            <h1>2</h1>
          </div>
        </div>

        {/* Operational Support Section */}
<div className="support-section">
  <div className="support-card">
    <img src="/src/assets/images/tech-support.png" alt="Tech Support" />
    <h4>3</h4>
    <p>Technical Supports</p>
  </div>
  <div className="support-card">
    <img src="/src/assets/images/operation-support.png" alt="Operation Team" />
    <h4>4</h4>
    <p>Operation Team</p>
  </div>
</div>
        {/* Footer */}
        <div className="footer">  Footer Area</div>
      </div>
    </div>
  );
};

export default Dashboard;
