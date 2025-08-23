import React, { useEffect, useState } from "react";

const EmployeeDashboard = () => {
  const [employee, setEmployee] = useState(null);
  const [attendance, setAttendance] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [payroll, setPayroll] = useState(null);

  useEffect(() => {
    // Mock employee data
    setEmployee({
      id: 101,
      name: "John Doe",
      role: "Software Engineer",
      department: "Development",
    });

    // Mock attendance data
    setAttendance([
      { date: "2025-08-20", status: "Present" },
      { date: "2025-08-21", status: "Absent" },
      { date: "2025-08-22", status: "Present" },
    ]);

    // Mock tasks
    setTasks([
      { id: 1, title: "Fix Login Bug", status: "In Progress" },
      { id: 2, title: "API Integration", status: "Completed" },
    ]);

    // Mock payroll
    setPayroll({ month: "August 2025", amount: "₹70,000", status: "Processed" });
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Employee Dashboard</h1>

      {employee && (
        <div style={{ marginBottom: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "10px" }}>
          <h2>👤 {employee.name}</h2>
          <p><b>Role:</b> {employee.role}</p>
          <p><b>Department:</b> {employee.department}</p>
        </div>
      )}

      <div style={{ display: "flex", gap: "20px" }}>
        {/* Attendance Section */}
        <div style={{ flex: 1, padding: "15px", border: "1px solid #ccc", borderRadius: "10px" }}>
          <h3>📅 Attendance</h3>
          <ul>
            {attendance.map((day, index) => (
              <li key={index}>{day.date}: {day.status}</li>
            ))}
          </ul>
        </div>

        {/* Tasks Section */}
        <div style={{ flex: 1, padding: "15px", border: "1px solid #ccc", borderRadius: "10px" }}>
          <h3>✅ Tasks</h3>
          <ul>
            {tasks.map(task => (
              <li key={task.id}>{task.title} - <b>{task.status}</b></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Payroll Section */}
      {payroll && (
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "10px" }}>
          <h3>💰 Payroll</h3>
          <p><b>Month:</b> {payroll.month}</p>
          <p><b>Amount:</b> {payroll.amount}</p>
          <p><b>Status:</b> {payroll.status}</p>
        </div>
      )}
    </div>
  );
};

export default EmployeeDashboard;
