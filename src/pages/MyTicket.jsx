import React from 'react';
import Sidebar from '../components/Sidebar1';
import '../index.css';

const MyTicket = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      
      <div className="content-area">
        {/* Top Right Controls */}
        <div className="top-right-controls">
          <div className="toggle-group">
            <button className="btn-left">BM</button>
            <button className="btn-right">BI</button>
          </div>
          <span className="icon">🔔</span>
          <span className="icon">👤</span>
          <span className="icon">🔁</span>
        </div>

        {/* Page Title */}
        <h2 className="dashboard-title">My Tickets</h2>

        {/* Ticket Table */}
        <div className="table-wrapper">
          <table className="ticket-table">
            <thead>
              <tr>
                <th>Ticket No.</th>
                <th>Subject</th>
                <th>Category</th>
                <th>Priority</th>
                <th>Date</th>
                <th>Status</th>
                <th>Assigned To</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: "1234", subject: "Login issue", category: "Access", priority: "High", date: "13/08/21", status: "In Progress" },
                { id: "1124", subject: "New ticket issue", category: "Access", priority: "Medium", date: "14/08/21", status: "On hold" },
                { id: "1224", subject: "New request", category: "Feedback", priority: "Low", date: "13/08/21", status: "Closed" },
                { id: "1244", subject: "Ticket submission", category: "Ticketing", priority: "High", date: "14/08/21", status: "In Progress" },
                { id: "1114", subject: "Login issue", category: "Access", priority: "High", date: "3/08/21", status: "In Progress" },
              ].map((ticket, index) => (
                <tr key={index}>
                  <td><a href="#">{ticket.id}</a></td>
                  <td>{ticket.subject}</td>
                  <td>{ticket.category}</td>
                  <td>{ticket.priority}</td>
                  <td>{ticket.date}</td>
                  <td>
                    <span className={`status ${ticket.status.toLowerCase().replace(/\s/g, '-')}`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td>👤</td>
                  <td>
                    <span title="View Details">📄</span>{' '}
                    <span title="Team View">👥</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="footer">© Helpdesk System</div>
      </div>
    </div>
  );
};

export default MyTicket;
