import React from "react";

function StudentDashboard() {
  const styles = {
    container: {
      fontFamily: "'Roboto', sans-serif",
      maxWidth: "1000px",
      margin: "50px auto",
      padding: "30px",
      borderRadius: "15px",
      backgroundColor: "#ffffff",
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
    },
    header: {
      textAlign: "center",
      marginBottom: "40px",
    },
    headerTitle: {
      fontSize: "32px",
      fontWeight: "700",
      color: "#222222",
      margin: "0 0 12px 0",
    },
    headerRole: {
      fontSize: "20px",
      color: "#555555",
      margin: "0",
    },
    tableContainer: {
      overflowX: "auto",
      marginBottom: "40px",
      borderRadius: "10px",
      border: "1px solid #dddddd",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      borderRadius: "8px",
    },
    tableHeader: {
      backgroundColor: "#f4f6f8",
      color: "#444444",
      fontWeight: "600",
      textAlign: "center",
      fontSize: "18px",
    },
    tableCellHeader: {
      padding: "18px",
      borderBottom: "1px solid #cccccc",
    },
    tableRow: {
      textAlign: "center",
      transition: "background-color 0.2s",
    },
    tableCell: {
      padding: "16px",
      borderBottom: "1px solid #eeeeee",
      fontSize: "16px",
      color: "#555555",
    },
    statusCell: (status) => ({
      fontWeight: "bold",
      color: status === "Present" ? "#2e7d32" : "#d32f2f", // Green for Present, Red for Absent
    }),
    summary: {
      padding: "25px",
      backgroundColor: "#f9f9f9",
      borderRadius: "12px",
      border: "1px solid #dddddd",
      boxShadow: "inset 0px 2px 5px rgba(0, 0, 0, 0.05)",
    },
    summaryTitle: {
      fontSize: "24px",
      fontWeight: "700",
      color: "#222222",
      marginBottom: "16px",
    },
    summaryItem: {
      fontSize: "18px",
      color: "#555555",
      marginBottom: "12px",
    },
  };

  // Example data
  const attendanceData = [
    { date: "2024-11-25", status: "Present", remarks: "-" },
    { date: "2024-11-26", status: "Absent", remarks: "Medical Leave" },
    { date: "2024-11-27", status: "Present", remarks: "-" },
    { date: "2024-11-28", status: "Absent", remarks: "Travel" },
  ];

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <h2 style={styles.headerTitle}>Welcome, [Student's Name]</h2>
        <p style={styles.headerRole}>Role: Student</p>
      </div>

      {/* Table Section */}
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.tableHeader}>
              <th style={styles.tableCellHeader}>Date</th>
              <th style={styles.tableCellHeader}>Status</th>
              <th style={styles.tableCellHeader}>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((entry, index) => (
              <tr key={index} style={styles.tableRow}>
                <td style={styles.tableCell}>{entry.date}</td>
                <td style={{ ...styles.tableCell, ...styles.statusCell(entry.status) }}>
                  {entry.status}
                </td>
                <td style={styles.tableCell}>{entry.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Section */}
      <div style={styles.summary}>
        <h3 style={styles.summaryTitle}>Summary</h3>
        <p style={styles.summaryItem}>
          <strong>Present:</strong> 2 days
        </p>
        <p style={styles.summaryItem}>
          <strong>Absent:</strong> 2 days
        </p>
        <p style={styles.summaryItem}>
          <strong>Percentage:</strong> 50%
        </p>
      </div>
    </div>
  );
}

export default StudentDashboard;
