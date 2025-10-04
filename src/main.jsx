import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Student from './view/Student/Student';
import Teacher from './view/proffesor/teacher';
import Home_professor from './view/proffesor/Home';
import Home from './view/Student/Home';
import Attendance from './view/Student/Attendance';
import Chat from './view/Student/chat';
import Courses from './view/Student/Courses';
import Event from './view/Student/event';
import Timetable from './view/Student/Timetable';
import Marks from './view/Student/marks';
import Calendar from './view/Student/Calendar';
import Setting from './components/Setting';
import AttendanceP from './view/proffesor/Attendance';
import MarksP from './view/proffesor/MarksP';
import Timetable_prof from './view/proffesor/Timetable';
import Calendar_prof from './view/proffesor/Calendar';
import Event_prof from './view/proffesor/event';
import Chat_prof from './view/proffesor/chat';
import Courses_Prof from './view/proffesor/Courses';
import Admin from './view/Admin/Admin';
import './firebase';






import { registerSW } from 'virtual:pwa-register'

registerSW({ immediate: true })

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
  })
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/page/Student" element={<Student />} />
        <Route path="/page/proffesor/Attendance" element={<AttendanceP />} />
        <Route path="/page/proffesor/MarksP" element={<MarksP />} />
        <Route path="/page/teacher" element={<Teacher />} />
        <Route path="/Page/Home" element={<Home />} />
        <Route path="/Attendance" element={<Attendance />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/event" element={<Event />} />
        <Route path="/Timetable" element={<Timetable />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/marks" element={<Marks />} />
        <Route path="/Calendar" element={<Calendar />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/home/proffesor" element={<Home_professor />} />
        <Route path="/home/proffesor/Timetable" element={<Timetable_prof />} />
        <Route path="/home/proffesor/calendar" element={<Calendar_prof />} />
        <Route path="/home/proffesor/Event" element={<Event_prof />} />
        <Route path="/home/proffesor/Chat" element={<Chat_prof />} />
        <Route path="/home/proffesor/Corses" element={<Courses_Prof/>} />
        <Route path="/Admin" element={<Admin/>} />



      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
