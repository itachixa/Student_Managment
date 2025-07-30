import React from "react";
import { FaCalendarAlt } from "react-icons/fa"; // Icône de calendrier
import BackButton from "../components/BackButton";
import "../Styles/Attendance.css"
const Timetable = () => {
  return (
    <div className="page">
      <BackButton to="/Home" label="Back" iconSize={18} />
      <header className="page-header">
        <center>
        <FaCalendarAlt size={60} color="#007BFF" />
        <h1>Timetable</h1>
        </center>
      </header>
      <section className="page-content">
        <p>Here is your weekly schedule:</p>
        <table className="timetable">
          <thead>
            <tr>
              <th>Day</th>
              <th>8:00 - 10:00</th>
              <th>10:00 - 12:00</th>
              <th>14:00 - 16:00</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Day1</td>
              <td>Math</td>
              <td>English</td>
              <td>Computer Science</td>
            </tr>
            <tr>
              <td>Day2</td>
              <td>Physics</td>
              <td>Algorithms</td>
              <td>Break</td>
            </tr>
            <tr>
              <td>Day3</td>
              <td colSpan="3">No Classes</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Timetable;
