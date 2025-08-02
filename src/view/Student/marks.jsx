import React from "react";
import { FaFileAlt } from "react-icons/fa";
import BackButton from "../../components/BackButton";
import "../../Styles/Student/marks.css";

const marksData = [
  { subject: "Data Structure and Algorithms", value: 14 },
  { subject: "Transforme and Bonudary Value Probleme", value: 1 },
  { subject: "Advance programming", value: 14 },
  { subject: "Operating Systemes", value: 9.5 },
  { subject: "Universal Human Value", value: 14 },
  { subject: "Microbiology", value: 14 },
  { subject: "Professional Ethique", value: 7 },
];

const getClassForMark = (value) => {
  if (value >= 13) return "excellent";
  if (value >= 10) return "good";
  if (value >= 7) return "average";
  return "poor";
};

const Marks = () => {
  return (
    <div className="page">
      <BackButton to="/Home" label="Back" iconSize={18} />
      <header className="page-header">
        <center>
          <FaFileAlt size={60} color="#007BFF" className="icon" />
          <h2>Marks</h2>
        </center>
      </header>
      <section className="page-content">
        <p>Your marks will be displayed here once available.</p>
        <ul className="marks-list">
          {marksData.map((item, index) => (
            <li key={index} className="mark-item">
              <span className="subject">{item.subject}</span>
              <span className={`value ${getClassForMark(item.value)}`}>
                {item.value}/15
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Marks;
