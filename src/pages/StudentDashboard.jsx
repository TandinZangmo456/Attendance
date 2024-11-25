import React from 'react';
import AttendanceRecord from '../components/AttendanceSheet'; // Adjust the path based on your folder structure

const StudentDashboard = () => {
  return (
    <div>
      <h1>Welcome, [Student's Name]</h1>
      <AttendanceRecord /> {/* Add the AttendanceRecord component */}
    </div>
  );
};

export default StudentDashboard;
