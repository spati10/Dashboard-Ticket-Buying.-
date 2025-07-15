// src/pages/TicketApproval.jsx
import React from 'react';
import Sidebar from '../components/Sidebar1';
import '../index.css';

const TicketApproval = () => {
  const tickets = [
    {
      id: '1234',
      subject: 'Login issue',
      category: 'Access Issue',
      priority: 'High',
      date: '13/08/21'
    },
    {
      id: '1124',
      subject: 'New ticket issue',
      category: 'Access Issue',
      priority: 'Medium',
      date: '14/08/21'
    },
    {
      id: '1224',
      subject: 'New request',
      category: 'Feedback',
      priority: 'Low',
      date: '13/08/21'
    },
    {
      id: '1244',
      subject: 'Ticket submission',
      category: 'Ticketing',
      priority: 'High',
      date: '14/08/21'
    },
    {
      id: '1114',
      subject: 'Login issue',
      category: 'Access Issue',
      priority: 'High',
      date: '3/08/21'
    }
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="content-area">
        {/* Top Bar */}
        <div className="top-right-controls">
          <div className="toggle-group">
            <button className="btn-left">BM</button>
            <button className="btn-right">BI</button>
          </div>
          <span className="icon">🔔</span>
          <span className="icon">👤</span>
          <span className="icon">🔁</span>
        </div>

        <div className="ticket-container">
          <header>
            <h1>Ticket Approval</h1>
            <div className="top-bar">
              <div className="search-box">
                <input type="text" placeholder="Find ticket" />
                <button>🔍</button>
              </div>

              <div>
                Show:
                <select style={{ margin: '0 5px' }}>
                  <option value="10">10</option>
                  <option value="20">20</option>
                </select>
                Entries
              </div>
            </div>
          </header>

          <table>
            <thead>
              <tr>
                <th>Ticket No.</th>
                <th>Subject</th>
                <th>Category</th>
                <th>Priority</th>
                <th>Date</th>
                <th>Action</th>
                <th>Assign to</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td>{ticket.id}</td>
                  <td>{ticket.subject}</td>
                  <td>{ticket.category}</td>
                  <td>{ticket.priority}</td>
                  <td>{ticket.date}</td>
                  <td>
                    <span>✔</span> <span>❌</span>
                  </td>
                  <td>
                    <select>
                      <option value="">Select</option>
                      <option value="tech">Technical Support</option>
                      <option value="ops">Operation Team</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ textAlign: 'left', marginTop: '10px' }}>
            Showing 1 to 5 of 5 entries
          </div>
          <div style={{ textAlign: 'right' }}>
            «‹ 1 ›»
          </div>
        </div>
        <div className="footer">Footer</div>
      </div>
    </div>
  );
};

export default TicketApproval;
