import React, { useState } from "react";
import { FaUserCheck, FaUserTimes } from "react-icons/fa";
import BackButton from '../../components/BackButton';
import "../../Styles/professor/AttendanceP.css";

const students = [
    "Sanda", "Alex", "Mariam", "John", "Fatou", "Ali", "Claire", "Paul", "Sara",
    "David", "Yao", "Salif", "Emma", "Noah", "Sophie", "Lucas", "Ines", "Mohamed",
    "Laura", "Julien", "Eva", "Nathan", "Amira"
];

function AttendanceP() {
    const [attendance, setAttendance] = useState({});

    const handleChange = (index, value) => {
        setAttendance({ ...attendance, [index]: value });
    };

    return (
        <div className="page-prof-attend">
            <BackButton to="/home/proffesor" label="Back" iconSize={18} />
            <center>
                <h1>T2 sections</h1>
            </center>
            <center><h2>Attendance of Students</h2></center>
            <table>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Attendance</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => {
                        const value = attendance[index] || "";
                        return (
                            <tr key={index}>
                                <td>{student}</td>
                                <td>
                                    <div className={`attendance-select ${value.toLowerCase()}`}>
                                        <select
                                            value={value}
                                            onChange={(e) => handleChange(index, e.target.value)}
                                        >
                                            <option value="">-- Select --</option>
                                            <option value="Present">Present</option>
                                            <option value="Absent">Absent</option>
                                        </select>
                                        {value === "Present" && <FaUserCheck className="status-icon present" />}
                                        {value === "Absent" && <FaUserTimes className="status-icon absent" />}
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default AttendanceP;
