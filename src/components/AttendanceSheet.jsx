import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AttendanceSheet = () => {
  const [formData, setFormData] = useState({
    course: '',
    name: '',
    date: '',
    status: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStatusChange = (status) => {
    setFormData({ ...formData, status });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Post the data to the backend API
    fetch('/api/attendance', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert('Attendance recorded successfully');
          navigate('/student-dashboard'); // Redirect to the dashboard after submission
        } else {
          alert('Failed to record attendance');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while recording attendance');
      });
  };

  return (
    <div className="attendance-sheet">
      <h2>Attendance Record</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Course Enrolled</label>
          <input
            type="text"
            name="course"
            placeholder="Course Enrolled"
            value={formData.course}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Student Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Status</label>
          <div className="status-buttons">
            <button
              type="button"
              className={formData.status === 'Present' ? 'active' : ''}
              onClick={() => handleStatusChange('Present')}
            >
              Present
            </button>
            <button
              type="button"
              className={formData.status === 'Absent' ? 'active' : ''}
              onClick={() => handleStatusChange('Absent')}
            >
              Absent
            </button>
            <button
              type="button"
              className={formData.status === 'Leave' ? 'active' : ''}
              onClick={() => handleStatusChange('Leave')}
            >
              Leave
            </button>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AttendanceSheet;
