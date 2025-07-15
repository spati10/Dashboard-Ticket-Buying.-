// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgetPassword from './pages/Forgetpassword';
import Dashboard from './pages/Dashboard';
import NewTicket from './pages/NewTicket';
import MyTicket from './pages/MyTicket';
import UserProfile from './pages/UserProfile';
import EditUserProfile from './pages/EditUserProfile';
import TicketApproval from './pages/TicketApproval';
import Performance from './pages/Performance';
import Database from './pages/Database';
import Setting from './pages/Setting';
import UserLogHistory from './pages/UserLogHistory';

import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ticket" element={<NewTicket />} />
        <Route path="/newticket" element={<NewTicket />} />
        <Route path="/myticket" element={<MyTicket />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/edit-profile" element={<EditUserProfile />} />
        <Route path="/ticketapproval" element={<TicketApproval />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/Database" element={<Database/>} />
        <Route path="/Setting" element={<Setting/>} />
        <Route path="/userloghistory" element={<UserLogHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
