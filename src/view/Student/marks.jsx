import React, { useEffect, useState } from "react";
import { FaFileAlt } from "react-icons/fa";
import BackButton from "../../components/BackButton";
import "../../Styles/Student/Marks.css";
import MarksIMG from "../../assets/img/Marks.jpeg";

const getClassForMark = (value) => {
  if (value >= 13) return "excellent";
  if (value >= 10) return "good";
  if (value >= 7) return "average";
  return "poor";
};

function Marks() {
  const [marks, setMarks] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔑 Récupération de l'ID étudiant connecté (stocké après login)
  let studentId = localStorage.getItem("studentId");

  useEffect(() => {
    const fetchMarks = async () => {
      try {
        const res = await fetch(`http://localhost:3008/grades/student/${studentId}`);
        if (!res.ok) throw new Error("Erreur API");
        const data = await res.json();
        setMarks(data);
      } catch (err) {
        console.error("Erreur récupération des notes:", err);
      } finally {
        setLoading(false);
      }
    };

    if (studentId) {
      fetchMarks();
    } else {
      setLoading(false);
    }
  }, [studentId]);

  if (loading) {
    return <p className="loading">⏳ Chargement des notes...</p>;
  }

  return (
    <div className="marks-page">
      {/* LEFT PANEL */}
      <div className="left-panel">
        <img src={MarksIMG} alt="Marks Visual" />
        <h2 className="brand">SRM</h2>
        <h1 className="title">
          Check Your <span className="highlight">Marks</span>
        </h1>
      </div>

      {/* RIGHT PANEL */}
      <div className="right-panel">
        <BackButton to="/Home" label="Back" iconSize={18} />
        <header className="marks-header">
          <FaFileAlt size={60} color="#007BFF" />
          <h2 className="marks-title">Marks Overview</h2>
          <p className="marks-subtitle">
            View your internal marks for each subject.
          </p>
        </header>

        <div className="marks-grid">
          {marks.length > 0 ? (
            marks.map((item, index) => (
              <div className="marks-card" key={index}>
                <div className="subject-name">{item.course}</div>
                <div className={`mark-value ${getClassForMark(item.score)}`}>
                  {item.score}/20
                </div>
              </div>
            ))
          ) : (
            <p className="no-marks">⚠️ No marks available for this student.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Marks;
