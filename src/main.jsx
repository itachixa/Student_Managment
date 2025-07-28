import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Student from './view/Student';
import Teacher from './view/teacher';
import Home from './view/Home';
import Attendance from './view/Attendance';
import Chat from './view/chat';
import Courses from './view/Courses';
import Event from './view/event';
import Timetable from './view/Timetable';
import Marks from './view/marks';
import Calendar from './view/Calendar';
import Setting from './components/Setting';

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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
