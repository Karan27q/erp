import React, { useEffect, useMemo, useState } from "react";
import "../styles/employeeDashboard.css";

const seedEmployees = [
  { id: 1, name: "Aarav Kumar", department: "Engineering", role: "SDE I", email: "aarav@acme.com", status: "Present" },
  { id: 2, name: "Isha Patel", department: "HR",          role: "HR Exec", email: "isha@acme.com",  status: "Leave" },
  { id: 3, name: "Vikram Rao",  department: "Finance",     role: "Analyst", email: "vikram@acme.com", status: "Present" },
  { id: 4, name: "Meera Shah",  department: "Sales",       role: "AM",      email: "meera@acme.com",  status: "Remote" },
  { id: 5, name: "Rohit Sen",   department: "Engineering", role: "SDE II",  email: "rohit@acme.com",  status: "Present" },
];

const emptyForm = { id: null, name: "", department: "", role: "", email: "", status: "Present" };

export default function EmployeeDashboard() {
  const [employees, setEmployees] = useState([]);
  const [query, setQuery] = useState("");
  const [sortKey, setSortKey] = useState("name");
  const [sortAsc, setSortAsc] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [isEditing, setIsEditing] = useState(false);

  // Load/persist to localStorage
  useEffect(() => {
    const saved = localStorage.getItem("employees");
    setEmployees(saved ? JSON.parse(saved) : seedEmployees);
  }, []);
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  // Derived stats
  const total = employees.length;
  const present = employees.filter(e => e.status === "Present").length;
  const leave = employees.filter(e => e.status === "Leave").length;

  // Search + sort
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const base = q
      ? employees.filter(
          e =>
            e.name.toLowerCase().includes(q) ||
            e.department.toLowerCase().includes(q) ||
            e.role.toLowerCase().includes(q) ||
            e.email.toLowerCase().includes(q)
        )
      : employees;

    const sorted = [...base].sort((a, b) => {
      const A = (a[sortKey] ?? "").toString().toLowerCase();
      const B = (b[sortKey] ?? "").toString().toLowerCase();
      if (A < B) return sortAsc ? -1 : 1;
      if (A > B) return sortAsc ? 1 : -1;
      return 0;
    });
    return sorted;
  }, [employees, query, sortKey, sortAsc]);

  const openAddModal = () => {
    setForm({ ...emptyForm, id: null });
    setIsEditing(false);
    setIsModalOpen(true);
  };

  const openEditModal = (emp) => {
    setForm({ ...emp });
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const onChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const saveEmployee = (e) => {
    e.preventDefault();
    // very basic validation
    if (!form.name.trim() || !form.email.trim()) {
      alert("Name and Email are required");
      return;
    }
    if (isEditing) {
      setEmployees(prev => prev.map(p => (p.id === form.id ? form : p)));
    } else {
      const nextId = employees.length ? Math.max(...employees.map(e => e.id)) + 1 : 1;
      setEmployees(prev => [...prev, { ...form, id: nextId }]);
    }
    closeModal();
  };

  const removeEmployee = (id) => {
    if (window.confirm("Delete this employee?")) {
      setEmployees(prev => prev.filter(e => e.id !== id));
    }
  };

  const toggleSort = (key) => {
    if (key === sortKey) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  return (
    <div className="wrap">
      <header className="topbar">
        <div>
          <h1 className="title">Employee Dashboard</h1>
          <p className="subtitle">ERP • Manage employees, track status, and make quick edits</p>
        </div>
        <div className="actions">
          <input
            className="input"
            placeholder="Search name / dept / role / email…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn primary" onClick={openAddModal}>+ Add Employee</button>
        </div>
      </header>

      <section className="cards">
        <div className="card">
          <div className="card-label">Total Employees</div>
          <div className="card-number">{total}</div>
        </div>
        <div className="card">
          <div className="card-label">Present Today</div>
          <div className="card-number">{present}</div>
        </div>
        <div className="card">
          <div className="card-label">On Leave</div>
          <div className="card-number">{leave}</div>
        </div>
      </section>

      <section className="panel">
        <div className="table-scroll">
          <table className="table">
            <thead>
              <tr>
                <th onClick={() => toggleSort("id")}     className="th-sort">ID {sortKey==="id"?(sortAsc?"▲":"▼"):""}</th>
                <th onClick={() => toggleSort("name")}   className="th-sort">Name {sortKey==="name"?(sortAsc?"▲":"▼"):""}</th>
                <th onClick={() => toggleSort("department")} className="th-sort">Department {sortKey==="department"?(sortAsc?"▲":"▼"):""}</th>
                <th onClick={() => toggleSort("role")}   className="th-sort">Role {sortKey==="role"?(sortAsc?"▲":"▼"):""}</th>
                <th>Email</th>
                <th onClick={() => toggleSort("status")} className="th-sort">Status {sortKey==="status"?(sortAsc?"▲":"▼"):""}</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan="7" style={{ textAlign: "center", padding: 24 }}>No matching employees</td></tr>
              ) : (
                filtered.map(emp => (
                  <tr key={emp.id}>
                    <td>{emp.id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.department}</td>
                    <td>{emp.role}</td>
                    <td>{emp.email}</td>
                    <td>
                      <span className={`status ${emp.status.toLowerCase()}`}>
                        {emp.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn small" onClick={() => openEditModal(emp)}>Edit</button>
                      <button className="btn small danger" onClick={() => removeEmployee(emp.id)}>Delete</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      {isModalOpen && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>{isEditing ? "Edit Employee" : "Add Employee"}</h3>
            <form onSubmit={saveEmployee} className="form">
              <div className="grid2">
                <label>
                  <span>Name</span>
                  <input name="name" value={form.name} onChange={onChange} required />
                </label>
                <label>
                  <span>Department</span>
                  <input name="department" value={form.department} onChange={onChange} />
                </label>
                <label>
                  <span>Role</span>
                  <input name="role" value={form.role} onChange={onChange} />
                </label>
                <label>
                  <span>Email</span>
                  <input type="email" name="email" value={form.email} onChange={onChange} required />
                </label>
                <label>
                  <span>Status</span>
                  <select name="status" value={form.status} onChange={onChange}>
                    <option>Present</option>
                    <option>Leave</option>
                    <option>Remote</option>
                  </select>
                </label>
              </div>
              <div className="modal-actions">
                <button type="button" className="btn" onClick={closeModal}>Cancel</button>
                <button className="btn primary" type="submit">{isEditing ? "Save Changes" : "Add Employee"}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
