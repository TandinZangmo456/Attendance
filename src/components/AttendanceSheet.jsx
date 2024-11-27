import React, { useState } from 'react';

const AttendanceSheet = () => {
  // State to hold form data
  const [course, setCourse] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');

  // Handler to submit the form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    console.log('Attendance Recorded:', {
      course,
      date,
      status,
    });

    // Reset the form after submission
    setCourse('');
    setDate('');
    setStatus('');
  };

  return (
    <div className="attendance-sheet">
      <h2>Attendance Record</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Course Enrolled</label>
          <input
            type="text"
            placeholder="Course Enrolled"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Status</label>
          <div className="status-buttons">
            <button
              type="button"
              className={`status-btn ${status === 'Present' ? 'selected' : ''}`}
              style={{ backgroundColor: '#4CAF50' }} // Green for Present
              onClick={() => setStatus('Present')}
            >
              Present
            </button>
            <button
              type="button"
              className={`status-btn ${status === 'Absent' ? 'selected' : ''}`}
              style={{ backgroundColor: '#f44336' }} // Red for Absent
              onClick={() => setStatus('Absent')}
            >
              Absent
            </button>
            <button
              type="button"
              className={`status-btn ${status === 'Leave' ? 'selected' : ''}`}
              style={{ backgroundColor: '#c0c0c0' }} // Grey for Leave
              onClick={() => setStatus('Leave')}
            >
              Leave
            </button>
          </div>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default AttendanceSheet;
