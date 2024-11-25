import React from "react";

function AttendanceSheet() {
  // Define a function to handle status change
  const handleStatusChange = (status) => {
    console.log("Attendance set to:", status);
  };

  return (
    <div className="attendance-container">
      <h2>Attendance Record</h2>
      <form>
        <label htmlFor="course">Module Enrolled</label>
        <input
          type="text"
          id="course"
          name="course"
          placeholder="Module Enrolled"
          required
        />

        <label htmlFor="date">Date</label>
        <input type="date" id="date" name="date" required />

        <label htmlFor="status">Status</label>
        <div id="status" className="status-buttons">
          <button
            type="button"
            className="status-button present"
            onClick={() => handleStatusChange("Present")}
          >
            Present
          </button>
          <button
            type="button"
            className="status-button absent"
            onClick={() => handleStatusChange("Absent")}
          >
            Absent
          </button>
          <button
            type="button"
            className="status-button leave"
            onClick={() => handleStatusChange("Leave")}
          >
            Leave
          </button>
        </div>
      </form>
    </div>
  );
}

export default AttendanceSheet;
