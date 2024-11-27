import React, { useState, useEffect } from 'react';

// Dummy data for example, replace this with actual data from a server or context
const initialAttendanceData = [
  { date: '2024-11-01', status: 'Present', remarks: '' },
  { date: '2024-11-02', status: 'Absent', remarks: 'Sick' },
  { date: '2024-11-03', status: 'Present', remarks: '' },
  { date: '2024-11-04', status: 'Absent', remarks: 'Personal Reason' },
  { date: '2024-11-05', status: 'Present', remarks: '' },
];

const StudentDashboard = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [summary, setSummary] = useState({ present: 0, absent: 0, percentage: 0 });

  // Fetch data on component mount, here using dummy data for simplicity
  useEffect(() => {
    setAttendanceData(initialAttendanceData);
    calculateSummary(initialAttendanceData);
  }, []);

  // Function to calculate attendance summary
  const calculateSummary = (data) => {
    const presentDays = data.filter(record => record.status === 'Present').length;
    const absentDays = data.filter(record => record.status === 'Absent').length;
    const totalDays = data.length;
    const percentage = totalDays ? ((presentDays / totalDays) * 100).toFixed(2) : 0;

    setSummary({ 
      present: presentDays, 
      absent: absentDays, 
      percentage 
    });
  };

  return (
    <div className="student-dashboard">
      <h2>Welcome, [Student's Name]</h2>
      <h3>Role: Student</h3>
      
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((record, index) => (
            <tr key={index}>
              <td>{record.date}</td>
              <td>{record.status}</td>
              <td>{record.remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="summary">
        <h3>Summary</h3>
        <p>Present: {summary.present} days</p>
        <p>Absent: {summary.absent} days</p>
        <p>Percentage: {summary.percentage}%</p>
      </div>
    </div>
  );
};

export default StudentDashboard;
