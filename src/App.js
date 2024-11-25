import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import StudentSignup from './components/StudentSignup.jsx';
import TeacherSignup from './components/TeacherSignup.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import TeacherDashboard from './pages/TeacherDashboard.jsx';
import StudentDashboard from './pages/StudentDashboard.jsx';
import AttendanceSheet from './components/AttendanceSheet.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Signup Routes */}
        <Route path="/student-signup" element={<StudentSignup />} />
        <Route path="/teacher-signup" element={<TeacherSignup />} />

        {/* Dashboard Routes */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />

        {/* AttendanceSheet Route (Dynamic classId parameter) */}
        <Route path="/attendance-sheet/:classId" element={<AttendanceSheet />} />
      </Routes>
    </Router>
  );
};

export default App;
