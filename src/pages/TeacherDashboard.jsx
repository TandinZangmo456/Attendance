import React from 'react';
import '../styles.css'; // Ensure this path is correct

const TeacherDashboard = () => {
  const classes = [
    { id: '101', name: 'Math Class' },
    { id: '102', name: 'Science Class' },
    { id: '103', name: 'History Class' },
  ];

  const handleAddClass = () => {
    console.log('Add a new class');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="profile">
          <div className="profile-picture">T</div>
          <div className="profile-details">
            <h2>Teacher Name</h2>
            <p>Teacher Profile</p>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <h1 className="dashboard-heading">Teacher Dashboard</h1>
        
        <section className="classes-section">
          <h2>Classes</h2>
          <div className="classes-grid">
            {classes.map((cls) => (
              <div key={cls.id} className="class-card">
                <h3 className="class-name">{cls.name}</h3>
                <button
                  className="view-attendance-button"
                  onClick={() => console.log(`Viewing attendance for class: ${cls.id}`)}
                >
                  View Attendance
                </button>
              </div>
            ))}
            
            <div className="add-class-card" onClick={handleAddClass}>
              <p>+ Add Class</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TeacherDashboard;