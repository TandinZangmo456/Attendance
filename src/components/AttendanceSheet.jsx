import React, { useEffect, useState } from 'react';
import { getAttendance } from '../api';

const AttendanceSheet = ({ classId }) => {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await getAttendance(classId);
        setAttendance(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAttendance();
  }, [classId]);

  return (
    <div>
      <h2>Attendance Sheet</h2>
      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((record) => (
            <tr key={record.id}>
              <td>{record.student.name}</td>
              <td>{record.date}</td>
              <td>{record.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceSheet;
