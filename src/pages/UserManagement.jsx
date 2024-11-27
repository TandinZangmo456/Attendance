import React from 'react';

const UserManagement = () => {
  return (
    <div>
      <h2>User Management</h2>
      <p>Role: <input type="text" placeholder="Enter role" /></p>
      <p>Name: <input type="text" placeholder="Enter name" /></p>
      <p>ID: <input type="text" placeholder="Enter ID" /></p>
      <button>Add User</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>001</td>
            <td>Perna</td>
            <td>Student</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          {/* Add more rows dynamically */}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;