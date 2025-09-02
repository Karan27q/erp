import React, { useState } from "react";
import Sidebar from "../components/Sidebar"; // ✅ import sidebar
import "../styles/EmployeeDashboard.css";

export default function EmployeeDashboard() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", dept: "IT", status: "Active" },
    { id: 2, name: "Jane Smith", dept: "HR", status: "On Leave" },
    { id: 3, name: "Michael Brown", dept: "Finance", status: "Active" },
    { id: 4, name: "Emily Davis", dept: "Marketing", status: "Active" },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    dept: "",
    status: "Active",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Add new employee
  const handleAddEmployee = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.dept) return;

    const newEmployee = {
      id: employees.length + 1,
      ...formData,
    };

    setEmployees([...employees, newEmployee]);
    setFormData({ name: "", dept: "", status: "Active" });
  };

  // Remove employee
  const handleRemoveEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="main">
        {/* Topbar */}
        <header className="topbar">
          <input type="text" placeholder="Search employees..." />
          <div className="profile">
            <span>Admin</span>
            <img src="https://i.pravatar.cc/40" alt="Profile" />
          </div>
        </header>

        {/* Stats */}
        <section className="stats-grid">
          <div className="card">
            <h3>Total Employees</h3>
            <p>{employees.length}</p>
          </div>
          <div className="card">
            <h3>Attendance Rate</h3>
            <p>92%</p>
          </div>
          <div className="card">
            <h3>Pending Payroll</h3>
            <p>$15,200</p>
          </div>
        </section>

        {/* Add Employee Form */}
        <section className="table-section">
          <h3>Add Employee</h3>
          <form onSubmit={handleAddEmployee} className="employee-form">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="dept"
              placeholder="Department"
              value={formData.dept}
              onChange={handleChange}
              required
            />
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Active">Active</option>
              <option value="On Leave">On Leave</option>
            </select>
            <button type="submit" className="add-btn">
              ➕ Add
            </button>
          </form>
        </section>

        {/* Employee Table */}
        <section className="table-section">
          <h3>Employee List</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.dept}</td>
                  <td
                    className={
                      emp.status === "Active"
                        ? "status-active"
                        : "status-leave"
                    }
                  >
                    {emp.status}
                  </td>
                  <td>
                    <button
                      className="remove-btn"
                      onClick={() => handleRemoveEmployee(emp.id)}
                    >
                      ❌ Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
