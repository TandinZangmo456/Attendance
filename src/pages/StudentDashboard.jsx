import React, { useState, useEffect } from 'react';

const StudentDashboard = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [summary, setSummary] = useState({ present: 0, absent: 0, percentage: 0 });

  // Fetch data from the backend on component mount
  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        // Replace with your backend endpoint
        const response = await fetch('/api/attendance'); 
        if (!response.ok) {
          throw new Error('Failed to fetch attendance data');
        }
        const data = await response.json(); // Assuming the server returns a JSON response
        setAttendanceData(data);
        calculateSummary(data);
      } catch (error) {
        console.error('Error fetching attendance data:', error);
      }
    };

    fetchAttendanceData();
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
