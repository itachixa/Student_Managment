import React from "react";
import { FaFileAlt } from "react-icons/fa"; // Icône de type "document"
import BackButton from "../components/BackButton";
import "../Styles/marks.css"

const Marks = () => {
  return (
    <div className="page">
      <BackButton to="/Home" label="Back" iconSize={18} />
      <header className="page-header">
        <FaFileAlt className="icon" />
        <h1>Marks</h1>
      </header>
      <section className="page-content">
        <p>Your marks will be displayed here once available.</p>
        <ul>
          <li>Math: 18/20</li>
          <li>Physics: 15/20</li>
          <li>English: 17/20</li>
        </ul>
      </section>
    </div>
  );
};

export default Marks;
