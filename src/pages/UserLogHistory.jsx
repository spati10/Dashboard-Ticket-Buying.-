import React from 'react';
import Sidebar from '../components/Sidebar1';
import '../index.css';

const UserLogHistory = () => {
  const logData = [
    {
      no: 1,
      signIn: '130821 / 0800',
      staffId: 'XL000001',
      dept: 'OT',
      activity: 'Create Team',
      signOut: '130821 / 0815'
    },
    {
      no: 2,
      signIn: '130821 / 0805',
      staffId: '',
      dept: '',
      activity: '',
      signOut: '130821 / 0810'
    },
    { no: 3, signIn: '', staffId: '', dept: '', activity: '', signOut: '' },
    { no: 4, signIn: '', staffId: '', dept: '', activity: '', signOut: '' },
    { no: 5, signIn: '', staffId: '', dept: '', activity: '', signOut: '' },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="content-area">
        <div className="dashboard-title">User Log History</div>

        <div className="log-controls">
          <label>Show:
            <select className="entry-dropdown">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            Entries
          </label>
        </div>

        <div className="table-wrapper">
          <table className="ticket-table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Date/Sign InTime</th>
                <th>Staff ID</th>
                <th>Department</th>
                <th>Activity</th>
                <th>Date/Sign Out time</th>
              </tr>
            </thead>
            <tbody>
              {logData.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.no}.</td>
                  <td>{entry.signIn}</td>
                  <td>{entry.staffId}</td>
                  <td>{entry.dept}</td>
                  <td>{entry.activity}</td>
                  <td>{entry.signOut}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <p>Showing 1 to 5 of 5 entries</p>
          <p>&laquo; 1 &raquo;</p>
        </div>
      </div>
    </div>
  );
};

export default UserLogHistory;
