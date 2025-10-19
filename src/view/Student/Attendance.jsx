import React, { useEffect, useState } from "react";
import "../../Styles/Student/Attendance.css";
import BackButton from "../../components/BackButton";
import AttendanceIMG from "../../assets/img/Attendance.jpeg";

function Attendance() {
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_BASE =
    window.location.hostname === "localhost"
      ? "http://localhost:3008"
      : "https://schoolapp-neon-backend.onrender.com";

  const studentId = localStorage.getItem("studentId");

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        if (!studentId) {
          alert("⚠️ No student ID found. Please log in again.");
          return;
        }

        const res = await fetch(`${API_BASE}/attendance/student/${studentId}`);
        if (!res.ok) throw new Error("Error fetching attendance data");

        const data = await res.json();
        setAttendanceData(data);
      } catch (err) {
        console.error("❌ Attendance fetch error:", err);
        alert("⚠️ Unable to load attendance data");
      } finally {
        setLoading(false);
      }
    };

    fetchAttendance();
  }, [studentId, API_BASE]);

  if (loading) {
    return (
      <div className="attendance-page">
        <div className="loading-container">
          <h2 className="loading-text">⏳ Loading attendance data...</h2>
        </div>
      </div>
    );
  }

  // Calcul du total des jours présents et absents
  const totalPresent = attendanceData.filter(a => a.status === "Present").length;
  const totalAbsent = attendanceData.filter(a => a.status === "Absent").length;
  const totalDays = totalPresent + totalAbsent;
  const presentPercentage = totalDays > 0 ? Math.round((totalPresent / totalDays) * 100) : 0;

  return (
    <div className="attendance-page">
      {/* Partie gauche */}
      <div className="left-panel">
        <img src={AttendanceIMG} alt="Attendance Visual" />
        <h2 className="brand">SRM</h2>
        <h1 className="title">
          Track Your <span className="highlight">Attendance</span>
        </h1>
      </div>

      {/* Partie droite */}
      <div className="right-panel">
        <BackButton to="/Home" label="Back" iconSize={18} />
        <h2 className="page-title">📊 Attendance Overview</h2>

        {attendanceData.length === 0 ? (
          <p className="no-data">No attendance records found.</p>
        ) : (
          <>
            {/* Statistiques globales */}
            <div className="summary">
              <p>✅ Present: {totalPresent} days</p>
              <p>❌ Absent: {totalAbsent} days</p>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${presentPercentage}%`,
                    backgroundColor: presentPercentage >= 75 ? "#4CAF50" : "#FF6B6B"
                  }}
                ></div>
              </div>
              <p>{presentPercentage}% Attendance</p>
            </div>

            {/* Liste détaillée */}
            <div className="attendance-grid">
              {attendanceData.map((item, index) => (
                <div className="attendance-card" key={index}>
                  <div className="subject-header">
                    <span className="subject-name">{item.date}</span>
                  </div>
                  <div className="status-bar">
                    {item.status === "Present" ? (
                      <span className="present">✅ Present</span>
                    ) : (
                      <span className="absent">❌ Absent</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Attendance;
