import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([
    { id: '001', name: 'Pema', role: 'Student' },
    { id: '002', name: 'Dolker', role: 'Student' },
  ]);

  const handleEdit = (id) => {
    console.log(`Edit user with ID: ${id}`);
  };

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const handleAddUser = () => {
    console.log('Add user functionality to be implemented.');
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-heading">Admin Dashboard</h1>

      {/* Navigation */}
      <nav className="dashboard-nav">
        <button
          className="nav-button"
        >
          User Management
        </button>
        <button
          className="nav-button"
          onClick={() => navigate('/attendance-reports')}
        >
          Attendance Reports
        </button>
        <button
          className="nav-button"
          onClick={() => navigate('/system-settings')}
        >
          System Settings
        </button>
      </nav>

      {/* Add User Form */}
      <div className="form-container">
        <select className="form-select">
          <option value="Student">Student</option>
          <option value="Teacher">Teacher</option>
          <option value="Admin">Admin</option>
        </select>
        <input
          type="text"
          placeholder="Enter name"
          className="form-input"
        />
        <input
          type="text"
          placeholder="Enter ID"
          className="form-input"
        />
        <button className="add-button" onClick={handleAddUser}>
          Add User
        </button>
      </div>

      {/* User Management Table */}
      <table className="user-table">
        <thead>
          <tr>
            <th className="table-header">ID</th>
            <th className="table-header">Name</th>
            <th className="table-header">Role</th>
            <th className="table-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="table-row">
              <td className="table-cell">{user.id}</td>
              <td className="table-cell">{user.name}</td>
              <td className="table-cell">{user.role}</td>
              <td className="table-cell">
                <button
                  className="edit-button"
                  onClick={() => handleEdit(user.id)}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};

export default AdminDashboard;