import { useState, useEffect } from "react";
import { FaSave, FaSyncAlt } from "react-icons/fa";
import BackButton from "../../components/BackButton";
import "../../Styles/professor/MarksP.css";

function MarksP() {
  const [marks, setMarks] = useState({});
  const [students, setStudents] = useState([]);
  const [saving, setSaving] = useState(false);
  const professorId = Number(localStorage.getItem("professorId")) || 1;
  const API_BASE = "http://localhost:3008";

  useEffect(() => {
    fetch(`${API_BASE}/students`)
      .then(res => res.json())
      .then(data => setStudents(data))
      .catch(err => console.error("❌ Error fetching students:", err));
  }, []);

  const handleChange = (id, value) => {
    setMarks(prev => ({ ...prev, [id]: value }));
  };

  // Sauvegarde individuelle
  const handleSave = async (studentId) => {
    try {
      const res = await fetch(`${API_BASE}/grades`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          student: { studentId },
          professor: { professorId },
          course: "Mathematics",
          score: Number(marks[studentId]),
        }),
      });
      if (!res.ok) throw new Error("Save failed");
      alert("✅ Grade saved successfully!");
    } catch (err) {
      console.error(err);
      alert("❌ Error saving grade");
    }
  };

  // 🔹 Sauvegarde de toutes les notes
  const handleSaveAll = async () => {
    if (Object.keys(marks).length === 0) {
      alert("⚠️ No marks to save!");
      return;
    }

    setSaving(true);
    try {
      const grades = Object.entries(marks).map(([studentId, score]) => ({
        student: { studentId: Number(studentId) },
        professor: { professorId },
        course: "Mathematics",
        score: Number(score),
      }));

      const res = await fetch(`${API_BASE}/grades/bulk`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(grades),
      });

      if (!res.ok) throw new Error("Save all failed");
      alert("✅ All grades saved successfully!");
    } catch (err) {
      console.error(err);
      alert("❌ Error saving all grades");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="marks-page">
      <div className="marks-header-area">
        <BackButton to="/home/professor" label="Back" iconSize={18} />
        <h1 className="marks-title">T2 Section</h1>
        <h2 className="marks-subtitle">Student <span>Marks Entry</span></h2>
      </div>

      <div className="marks-list">
        <div className="marks-row header">
          <span className="col-name">Student Name</span>
          <span className="col-input">Mark</span>
          <span className="col-actions">Actions</span>
        </div>

        {students.map((s, idx) => (
          <div key={s.studentId} className="marks-row">
            <span className="col-name">#{idx + 1} {s.name}</span>

            <input
              type="number"
              className="mark-input"
              placeholder="Enter mark"
              value={marks[s.studentId] || ""}
              onChange={e => handleChange(s.studentId, e.target.value)}
              min="0"
              max="100"
            />

            <div className="col-actions">
              <button className="btn save-btn" onClick={() => handleSave(s.studentId)}>
                <FaSave /> Save
              </button>
              <button className="btn update-btn">
                <FaSyncAlt /> Update
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Bouton global */}
      <center>
        <button className="save-btn global" onClick={handleSaveAll} disabled={saving}>
          {saving ? "Saving..." : "💾 Save All Marks"}
        </button>
      </center>
    </div>
  );
}

export default MarksP;
