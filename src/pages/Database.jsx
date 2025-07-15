import React, { useState } from 'react';
import Sidebar from '../components/Sidebar1';
import '../index.css';

const Database = () => {
  const [activeTab, setActiveTab] = useState('User');

  const data = [
    { id: 'ABC123', name: 'Abu', department: 'IT', speciality: 'Software' },
    { id: 'ABC124', name: 'Ahmad', department: 'Software', speciality: 'Networking' },
    { id: 'ABC125', name: 'Ali', department: 'Technical', speciality: 'Hardware' }
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="content-area">
        <div className="top-right-controls">
          <div className="toggle-group">
            <button className="btn-left">BM</button>
            <button className="btn-right">BI</button>
          </div>
          <span className="icon">🔔</span>
          <span className="icon">👤</span>
          <span className="icon">🔁</span>
        </div>

        <h2 className="dashboard-title">Database</h2>

        <div className="tabs">
          <button className={activeTab === 'User' ? 'tab active' : 'tab'} onClick={() => setActiveTab('User')}>User</button>
          <button className={activeTab === 'Operation' ? 'tab active' : 'tab'} onClick={() => setActiveTab('Operation')}>Operation Team</button>
          <button className={activeTab === 'Support' ? 'tab active' : 'tab'} onClick={() => setActiveTab('Support')}>Technical Support</button>
        </div>

        <div className="table-wrapper">
          <input className="search-box" type="text" placeholder="Find ticket" />
          <table className="ticket-table">
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>Staff ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Speciality</th>
                <th>Setting</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i}>
                  <td><input type="checkbox" /></td>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.department}</td>
                  <td>{row.speciality}</td>
                  <td>✏️ 🗑️</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>Showing 1 to {data.length} of {data.length} entries</p>
        </div>
      </div>
    </div>
  );
};

export default Database;
