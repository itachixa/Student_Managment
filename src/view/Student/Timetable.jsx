import React, { useRef } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import BackButton from "../../components/BackButton";
import { useReactToPrint } from "react-to-print";
import "../../Styles/Student/Timetable.css";
import TimetableIMG from "../../assets/img/Timetable.jpeg";
import Timetable_prof from "../proffesor/Timetable";
function Timetable() {
  const tableRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
    documentTitle: "Timetable",
  });

  return (
    <div className="page">
      {/* LEFT PANEL */}
      <div className="left-panel">
        <h2 className="brand">SRM</h2>
        <img src={TimetableIMG} alt="" />
        <h1 className="title">
          Weekly <span className="highlight">Timetable</span>
        </h1>
        <p className="subtitle">
          Manage and download your class schedule easily.
        </p>
      </div>

      {/* RIGHT PANEL */}
      <div className="right-panel">
        <BackButton to="/Home" label="Back" iconSize={18} />
        <header className="page-header">
          <FaCalendarAlt size={50} color="#0d6efd" />
          <h2 className="page-title">Your Timetable</h2>
        </header>

        <div className="timetable-container" ref={tableRef}>
          <table className="timetable">
            <thead>
              <tr>
                <th>Time</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>8:00 - 9:00</td>
                <td>Math</td>
                <td>Physics</td>
                <td>English</td>
                <td>Algorithms</td>
                <td>Math</td>
              </tr>
              <tr>
                <td>9:00 - 10:00</td>
                <td>Math</td>
                <td>Physics</td>
                <td>English</td>
                <td>Algorithms</td>
                <td>Math</td>
              </tr>
              <tr>
                <td>10:00 - 11:00</td>
                <td colSpan="5" className="break">
                  ☕ Break
                </td>
              </tr>
              <tr>
                <td>11:00 - 12:00</td>
                <td>Chemistry</td>
                <td>Math</td>
                <td>Computer</td>
                <td>English</td>
                <td>Sport</td>
              </tr>
              <tr>
                <td>12:00 - 13:00</td>
                <td>Chemistry</td>
                <td>Math</td>
                <td>Computer</td>
                <td>English</td>
                <td>Sport</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="download-container">
          <button className="download-btn" onClick={handlePrint}>
            ⬇️ Download Timetable
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timetable;
