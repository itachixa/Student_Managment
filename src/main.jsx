import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Student from './page/Student';
import Teacher from './page/teacher';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/page/Student" element={<Student />} />
        <Route path="/page/teacher" element={<Teacher />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
