import React from 'react';

const AttendanceReports = () => {
  return (
    <div>
      <h2>Attendance Reports</h2>
      <p>Class: <input type="text" placeholder="Enter class" /></p>
      <p>Date Range: <input type="date" /> to <input type="date" /></p>
      <button>Generate Report</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Attendance %</th>
            <th>Absences</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ms. Zangmo</td>
            <td>1BWE</td>
            <td>98%</td>
            <td>2</td>
          </tr>
          {/* Add more rows dynamically */}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceReports;