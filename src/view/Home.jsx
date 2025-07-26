import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";
import bgImage from "../assets/background.png"; // Assure-toi que cette image est présente dans ton projet

function Home() {
  return (
    <div className="home-container" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="overlay" />
      <div className="home-content">
        <header className="header">
          <h1>Welcome to SRM Management System</h1>
          <p>Explore and manage your educational resources with ease.</p>
        </header>

        <div className="card-grid">
          <Link to="/Attendance" className="card">📊 Attendance</Link>
          <Link to="/Timetable" className="card">🕒 Timetable</Link>
          <Link to="/marks" className="card">📈 Marks</Link>
          <Link to="/Calendar" className="card">📅 Calendar</Link>
          <Link to="/event" className="card">🏛️ Events</Link>
          <Link to="/Courses" className="card">📚 Courses</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
