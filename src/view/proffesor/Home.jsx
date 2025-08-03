import React from "react";
import { Link } from "react-router-dom";
import { FiSettings } from "react-icons/fi"; // Icône paramètre stylisable
import "../../Styles/Student/Home.css";
import bgImage from "../../assets/background.png";
import ThemeToggle from "../../components/ThemeToggle";

function Home_professor() {
  return (
    
    <div className="home-container" style={{ backgroundImage: `url(${bgImage})` }}>
    
      <div className="overlay" />
      <ThemeToggle />

      {/* Icône Settings stylisée */}
      <div style={{ position: "absolute", top: "20px", right: "20px", zIndex: 2 }}>
        <Link className="settings-icon" to="/setting">
          <FiSettings className="settings-icon-custom" />
        </Link>
      </div>

      <div className="home-content">
        <header className="header">
          <h1 className="sentence">Welcome to SRM Management System</h1>
          <p className="sentence">Explore and manage your educational resources with ease.</p>
        </header>

        <div className="card-grid">
          <Link to="/page/proffesor/Attendance" className="card">📊 Attendance</Link>
          <Link to="/home/proffesor/Timetable" className="card">🕒 Timetable</Link>
          <Link to="/page/proffesor/MarksP" className="card">📈 Marks</Link>
          <Link to="/home/proffesor/calendar" className="card">📅 Calendar</Link>
          <Link to="/home/proffesor/Event" className="card">🏛️ Events</Link>
          <Link to="/home/proffesor/Corses" className="card">📚 Courses</Link>
          <Link to="/home/proffesor/Chat" className="card" style={{ gridColumn: "1 / -1", textAlign: "center" }}>
            💬 Chat
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home_professor;
