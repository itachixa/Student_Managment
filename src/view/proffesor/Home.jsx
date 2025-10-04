import React from "react";
import { Link } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import "../../Styles/Student/Home.css";
import SRMImg from "../../assets/SRM.png";
import TeacherImg from "../../assets/img/Teacher.jpeg";
import ThemeToggle from "../../components/ThemeToggle";

function Home() {
  return (
    <div className="page">
      {/* LEFT SIDE (branding like login) */}
      <div className="left-panel">
        <center>
          <img className="ico" src={SRMImg} alt="SRM ico" />
        </center>
        <h2 className="brand">SRM</h2>
        <h1 className="title">
          Welcome to <span className="highlight">SRM</span> <br />
          Management System
        </h1>
        <div className="illustration">
          <center>
            <img src={TeacherImg} alt="teacher" />
          </center>
        </div>
      </div>

      {/* RIGHT SIDE (functional cards) */}
      <div className="right-panel">
        <ThemeToggle />

        {/* Settings icon */}
        <div style={{ position: "absolute", top: "20px", right: "20px", zIndex: 2 }}>
          <Link className="settings-icon" to="/setting">
            <FiSettings className="settings-icon-custom" />
          </Link>
        </div>

        <h2>Dashboard</h2>
        <p className="subtitle">Explore and manage your educational resources</p>

        <div className="card-grid">
          <Link to="/page/proffesor/Attendance" className="card">📊 Attendance</Link>
          <Link to="/home/proffesor/Timetable" className="card">🕒 Timetable</Link>
          <Link to="/page/proffesor/MarksP" className="card">📈 Marks</Link>
          <Link to="/home/proffesor/calendar" className="card">📅 Calendar</Link>
          <Link to="/home/proffesor/Event" className="card">🏛️ Events</Link>
          <Link to="/home/proffesor/Chat" className="card full-width">💬 Chat</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
