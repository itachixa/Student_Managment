import React from "react";
import { FaFileAlt } from "react-icons/fa"; // Icône de type "document"
import BackButton from "../components/BackButton";
import "../Styles/marks.css"

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
        <ul>
          <li className="Marks">Data Structure and Algorithms <p className="value">14/15</p></li>
          <li className="Marks">Transforme and Bonudary  Value Probleme<p className="value">14/15</p></li>
          <li className="Marks">Advance  programming <p className="value">14/15</p></li>
          <li className="Marks">Operating Systemes<p className="value">14/15</p></li>
          <li className="Marks">Universal Human Vailue<p className="value">14/15</p></li>
          <li className="Marks">Microbiology<p className="value">14/15</p>
          </li>
          <li className="Marks">Professional Ethique<p className="value">14/15</p> </li>
        </ul>
        
       
      </section>
    </div>
  );
};

export default Marks;
