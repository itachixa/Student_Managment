// src/pages/Calendar.jsx
import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';


function Calendar() {
  return (
    <div className="calendar-page">
      <div className="calendar-content">
        <FaCalendarAlt size={80} color="#007BFF" />
        <h2>Calendar</h2>
        <p>Stay updated with all your events and important school dates.</p>
      </div>
    </div>
  );
}

export default Calendar;
