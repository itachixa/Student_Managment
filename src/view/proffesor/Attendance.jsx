import React, { useEffect, useState } from "react";
import { FaUserCheck, FaUserTimes } from "react-icons/fa";
import BackButton from "../../components/BackButton";
import "../../Styles/professor/AttendanceP.css";

const API_BASE =
  window.location.hostname === "localhost"
    ? "http://localhost:3008"
    : "https://schoolapp-neon-backend.onrender.com";

function AttendanceP() {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const professorId = Number(localStorage.getItem("professorId")) || 1;

  // Charger les étudiants
  const fetchStudents = async () => {
    try {
      const res = await fetch(`${API_BASE}/students`);
      if (!res.ok) throw new Error("Erreur serveur");
      const data = await res.json();
      setStudents(data);
    } catch (err) {
      console.error("Erreur chargement étudiants :", err);
    }
  };

  useEffect(() => {
    fetchStudents().finally(() => setLoading(false));
  }, []);

  const handleChange = (studentId, status) => {
    setAttendance((prev) => ({ ...prev, [studentId]: status }));
  };

  // Sauvegarde en base
  const handleSaveAll = async () => {
    setSaving(true);
    try {
      const attendances = Object.entries(attendance).map(([studentId, status]) => ({
        student: { studentId: Number(studentId) },
        professor: { professorId },
        status,
        date: new Date().toISOString().split("T")[0],
      }));

      const res = await fetch(`${API_BASE}/attendance/bulk`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(attendances),
      });

      if (!res.ok) throw new Error("Erreur enregistrement");
      alert("✅ Attendance saved successfully!");
    } catch (err) {
      console.error("Erreur sauvegarde :", err);
      alert("❌ Failed to save attendance. Check backend connection.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="page-prof-attend">
      <BackButton to="/home/proffesor" label="Back" iconSize={18} />
      <center>
        <h1>T2 Section</h1>
        <h2>Attendance of Students</h2>
      </center>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Attendance</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => {
                const value = attendance[student.studentId] || "";
                return (
                  <tr key={student.studentId}>
                    <td>{student.name || student.user?.email}</td>
                    <td>
                      <div className={`attendance-select ${value.toLowerCase()}`}>
                        <select
                          value={value}
                          onChange={(e) =>
                            handleChange(student.studentId, e.target.value)
                          }
                        >
                          <option value="">-- Select --</option>
                          <option value="Present">Present</option>
                          <option value="Absent">Absent</option>
                        </select>
                        {value === "Present" && (
                          <FaUserCheck className="status-icon present" />
                        )}
                        {value === "Absent" && (
                          <FaUserTimes className="status-icon absent" />
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <center>
            <button
              className="save-btn"
              onClick={handleSaveAll}
              disabled={saving}
            >
              {saving ? "Saving..." : "💾 Save Attendance"}
            </button>
          </center>
        </>
      )}
    </div>
  );
}

export default AttendanceP;
