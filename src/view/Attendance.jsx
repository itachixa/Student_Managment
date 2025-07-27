import React from 'react';
import { FaClipboardList } from 'react-icons/fa';
import BackButton from '../components/BackButton'; // adapte le chemin si nécessaire

function Attendance() {
  return (
    <div className="page" style={{ padding: '20px' }}>
      <BackButton to="/Home" label="Back" iconSize={18} />
      <div style={{ marginTop: '20px' }}>
        <FaClipboardList size={60} color="#007BFF" />
        <h2>Attendance</h2>
        <p>Track and view student attendance records here.</p>
      </div>
    </div>
  );
}

export default Attendance;
