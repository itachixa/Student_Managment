// src/pages/Calendar.jsx
import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import BackButton from '../components/BackButton';


function Calendar() {
  return (
    <div className="calendar-page">
      
      <BackButton to="/Home" label="Back" iconSize={18} />
      <div className="calendar-content">
        <center>
        <FaCalendarAlt size={80} color="#007BFF" />
        <h2>Calendar</h2>
        </center>
        <p>Stay updated with all your events and important school dates.</p>
      </div>
    </div>
  );
}

export default Calendar;
