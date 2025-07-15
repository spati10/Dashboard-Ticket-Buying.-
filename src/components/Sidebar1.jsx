// src/components/Sidebar1.jsx
import React from 'react';
import { Link } from 'react-router-dom';



const Sidebar = () => {
  return (
    <div className="sidebar bg-gray-100 p-4 min-h-screen shadow-md w-64">
      <h1 className="text-2xl font-bold text-teal-600 mb-8 italic">Helpdesk</h1>
      <ul className="space-y-4 text-gray-800">
        <li>
          <Link to="/" className="hover:text-teal-500">📊 Dashboard</Link>
        </li>
        <li>
          <Link to="/newticket" className="hover:text-teal-500">📝 New Ticket</Link>
        </li>
        <li>
          <Link to="/myticket" className="hover:text-teal-500">📁 My Ticket</Link>
        </li>
        <li>
           <Link to="/profile" className="sidebar-link">👤 My Profile</Link>
        </li>
        
          <li>
          <Link to="/edit-profile">🛠️ Edit Profile</Link>

          </li>
        
        <li>
         <Link to="/ticketapproval" className="hover:text-teal-500">📝 Ticket Approval</Link>

          </li>
        <li>
          <Link to="/performance" className="hover:text-teal-500">📈 Performance</Link
          >
        </li>
        <li>
          <Link to="/Database" className="hover:text-teal-500">🛢Database</Link
          >
        </li>
        <li>
           <Link to="/Setting" className="hover:text-teal-500">⚙️setting</Link>
        </li>
        <li>
           <Link to="/userloghistory">📜 User Log History</Link>
        </li>
        

        
        </ul>
    </div>
  );
};

export default Sidebar;
