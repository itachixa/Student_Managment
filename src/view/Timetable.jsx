import React, { useRef } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import BackButton from "../components/BackButton";
import "../Styles/Event.css";
import { useReactToPrint } from "react-to-print";

const Timetable = () => {
  const tableRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
    documentTitle: "Timetable",
  });

  return (
    <div className="page">
      <BackButton to="/Home" label="Back" iconSize={18} />
      <header className="page-header">
        <center>
          <FaCalendarAlt size={60} color="#007BFF" />
          <h1>Timetable</h1>
          <p>Here is your weekly schedule:</p>
        </center>
      </header>

      <section className="page-content">
        <div className="timetable-container" ref={tableRef}>
          <table className="timetable">
            <thead>
              <tr>
                <th>Time</th>
                <th>Day1</th>
                <th>Day1</th>
                <th>Wed</th>
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
                <td colSpan="5" className="break">Break</td>
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
        <center>
          <button className="download-btn" onClick={handlePrint}>
            Download Timetable
          </button>
        </center>
      </section>
    </div>
  );
};

export default Timetable;
