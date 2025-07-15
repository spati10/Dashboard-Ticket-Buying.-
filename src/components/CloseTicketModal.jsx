import React from 'react';
import './CloseTicketModal.css'; // Optional separate CSS

const CloseTicketModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>My Ticket - Close Ticket</h2>

        <div className="modal-body">
          <div className="input-group">
            <input type="text" placeholder="Ticket No." />
            <textarea placeholder="Remark" />
          </div>
          <input type="text" placeholder="Team Name" />
          <div className="input-icon">
            <input type="text" placeholder="Team Member" />
            <span>👥</span>
          </div>
        </div>

        <div className="modal-actions">
          <button className="refresh-btn">🔄</button>
          <button className="submit-btn" onClick={onClose}>Close Ticket</button>
        </div>
      </div>
    </div>
  );
};

export default CloseTicketModal;
