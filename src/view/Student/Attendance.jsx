import React from "react";
import "../../Styles/Student/Attendance.css";
import BackButton from '../../components/BackButton';

const attendanceData = [
  {
    subject: "Transforms And Boundary Value Problems",
    present: 3,
    absent: 2,
    total: 5,
    required: 3,
    percentage: 60,
  },
  {
    subject: "Operating Systems",
    present: 3,
    absent: 2,
    total: 5,
    required: 3,
    percentage: 60,
  },
  {
    subject: "Data Structures And Algorithms",
    present: 3,
    absent: 0,
    total: 3,
    margin: 1,
    percentage: 100,
  },
  {
    subject: "Computer Organization And Architecture",
    present: 4,
    absent: 0,
    total: 4,
    margin: 1,
    percentage: 100,
  },
  {
    subject: "Artificial Intelligence",
    present: 2,
    absent: 1,
    total: 3,
    required: 2,
    percentage: 66,
  },
  {
    subject: "Cyber Security Fundamentals",
    present: 5,
    absent: 0,
    total: 5,
    margin: 2,
    percentage: 100,
  },
];

function Attendance() {
  return (
    <div className="attendance-container">
      <BackButton to="/Home" label="Back" iconSize={18} />
      <h1 className="page-title">📊 Attendance</h1>
      {attendanceData.map((item, index) => (
        <div className="attendance-card" key={index}>
          <div className="subject-header">
            <span className="subject-name">{item.subject}</span>
            {item.required !== undefined ? (
              <span className="requirement">Required: {item.required}</span>
            ) : (
              <span className="margin">Margin: {item.margin}</span>
            )}
          </div>
          <div className="status-bar">
            <span className="present">Present: {item.present}</span>
            <span className="absent"> Absent: {item.absent}</span>
            <span className="total"> Total: {item.total}</span>
            <span
              className={`percentage ${
                item.percentage < 75 ? "low" : "good"
              }`}
            >
               {item.percentage}%
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Attendance;
