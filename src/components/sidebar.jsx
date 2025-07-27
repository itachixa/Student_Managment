// src/components/Sidebar.jsx
import { Link } from "react-router-dom";
import { FaUserCheck, FaComments, FaBook, FaCalendarAlt, FaClock, FaChartBar } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-blue-900 text-white flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">MySchool</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2"><FaChartBar /> Dashboard</Link>
        <Link to="/attendance" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2"><FaUserCheck /> Attendance</Link>
        <Link to="/chat" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2"><FaComments /> Chat</Link>
        <Link to="/courses" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2"><FaBook /> Courses</Link>
        <Link to="/events" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2"><FaCalendarAlt /> Events</Link>
        <Link to="/timetable" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2"><FaClock /> Timetable</Link>
        <Link to="/marks" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2"><FaChartBar /> Marks</Link>
      </nav>
    </div>
  );
}
