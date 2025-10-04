import React from "react";
import { FaBookOpen } from "react-icons/fa";
import BackButton from "../../components/BackButton";
import "../../Styles/Student/Courses.css";
import CoursesIMG from "../../assets/img/Course.jpeg"; // ajoute une image ici

function Courses() {
  return (
    <div className="courses-page">
      {/* LEFT PANEL */}
      <div className="left-panel">
        <img src={CoursesIMG} alt="Courses Visual" />
        <h2 className="brand">SRM</h2>
        <h1 className="title">
          Explore Your <span className="highlight">Courses</span>
        </h1>
      </div>

      {/* RIGHT PANEL */}
      <div className="right-panel">
        <BackButton to="/Home" label="Back" iconSize={18} />
        <header className="courses-header">
         <center> <FaBookOpen size={60} color="#0d6efd" />
          <h2 className="courses-title">Courses</h2></center>
          <p className="courses-subtitle">
            View your enrolled courses and access study materials.
          </p>
        </header>

        <section className="courses-list">
          <ul>
            <li>📘 Data Structure and Algorithms</li>
            <li>📘 Transform and Boundary Value Problems</li>
            <li>📘 Advanced Programming</li>
            <li>📘 Operating Systems</li>
            <li>📘 Universal Human Values</li>
            <li>📘 Computer Organization and Architecture</li>
            <li>📘 Digital Thinking and Methodology</li>
            <li>📘 Solid State Devices</li>
            <li>📘 Microbiology</li>
            <li>📘 Professional Ethics</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Courses;
