import React, { useState } from 'react';

const AttendanceReports = () => {
    const [users] = useState([
        { name: 'Ms. Zangmo', class: '1 SWE', attendance: 95, absences: 2 },
        { name: 'Mrs. Dupchu', class: '2 BBI B', attendance: 88, absences: 5 },
    ]);

    const handleExport = (format) => {
        console.log(`Exporting data as ${format}`);
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <div>
                <button>User Management</button>
                <button>Attendance Reports</button>
                <button>System Settings</button>
            </div>
            <div>
                <label>
                    Class:
                    <select>
                        <option value="1 SWE">1 SWE</option>
                        <option value="2 BBI B">2 BBI B</option>
                    </select>
                </label>
                <label>
                    Teacher:
                    <select>
                        <option value="Ms. Zangmo">Ms. Zangmo</option>
                        <option value="Mrs. Dupchu">Mrs. Dupchu</option>
                    </select>
                </label>
                <label>
                    Start Date:
                    <input type="date" />
                </label>
                <label>
                    End Date:
                    <input type="date" />
                </label>
                <button onClick={() => console.log('Generating report...')}>
                    Generate Report
                </button>
            </div>
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
                    {users.map((user) => (
                        <tr key={user.name}>
                            <td>{user.name}</td>
                            <td>{user.class}</td>
                            <td>{user.attendance}%</td>
                            <td>{user.absences}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <button onClick={() => handleExport('PDF')}>Export as PDF</button>
                <button onClick={() => handleExport('Excel')}>Export as Excel</button>
            </div>
        </div>
    );
};

export default AttendanceReports;