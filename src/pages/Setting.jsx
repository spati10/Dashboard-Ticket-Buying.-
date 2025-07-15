import React, { useState } from 'react';
import Sidebar from '../components/Sidebar1';
import '../index.css';

const Setting = () => {
  const [openSection, setOpenSection] = useState({
    general: true,
    connect: true,
    email: true,
    authorization: true,
    notification: true,
  });

  const toggleSection = (section) => {
    setOpenSection((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

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

        <h2 className="dashboard-title">Setting</h2>

        <div className="setting-section">
          {/* General */}
          <div className="setting-block">
            <div className="setting-title" onClick={() => toggleSection('general')}>
              General <span>{openSection.general ? '▼' : '▶'}</span>
            </div>
            {openSection.general && (
              <div className="setting-content">
                <div className="setting-row">
                  <div>Language</div>
                  <div>
                    <button className="btn-left">BM</button>
                    <button className="btn-right">BI</button>
                  </div>
                </div>
                <div className="setting-row">
                  <div>Data Backup</div>
                  <input type="checkbox" checked readOnly />
                </div>
              </div>
            )}
          </div>

          {/* Connect To */}
          <div className="setting-block">
            <div className="setting-title" onClick={() => toggleSection('connect')}>
              Connect To <span>{openSection.connect ? '▼' : '▶'}</span>
            </div>
            {openSection.connect && (
              <div className="setting-content">
                <div className="setting-row">
                  <div>GoDash</div>
                  <input type="checkbox" checked readOnly />
                </div>
                <div className="setting-row">
                  <div>SuperController</div>
                  <input type="checkbox" checked readOnly />
                </div>
              </div>
            )}
          </div>

          {/* Email */}
          <div className="setting-block">
            <div className="setting-title" onClick={() => toggleSection('email')}>
              Email <span>{openSection.email ? '▼' : '▶'}</span>
            </div>
            {openSection.email && (
              <div className="setting-content">
                <div className="setting-row">
                  <div>Enable SMTP</div>
                  <input type="checkbox" checked readOnly />
                </div>
              </div>
            )}
          </div>

          {/* Authorization */}
          <div className="setting-block">
            <div className="setting-title" onClick={() => toggleSection('authorization')}>
              Authorization <span>{openSection.authorization ? '▼' : '▶'}</span>
            </div>
            {openSection.authorization && (
              <div className="setting-content">
                <div className="setting-row">
                  <div>Edit authorization</div>
                  <input type="checkbox" checked readOnly />
                </div>
                <div className="setting-row">
                  <div>Authority Level</div>
                  <select>
                    <option>Admin</option>
                    <option>Viewer</option>
                    <option>Editor</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Notification */}
          <div className="setting-block">
            <div className="setting-title" onClick={() => toggleSection('notification')}>
              Notification <span>{openSection.notification ? '▼' : '▶'}</span>
            </div>
            {openSection.notification && (
              <div className="setting-content">
                <div className="setting-row">
                  <div>Enable Notification</div>
                  <input type="checkbox" checked readOnly />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
