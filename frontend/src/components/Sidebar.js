import React, { useState } from "react";
import "../styles/Sidebar.css";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <aside className={`sidebar ${open ? "open" : "collapsed"}`}>
      <button className="sidebar-toggle" onClick={() => setOpen(!open)}>
        ☰
      </button>
      <h2>ERP</h2>
      <nav>
        <button>📊 Dashboard</button>
        <button>👥 Employees</button>
        <button>📝 Attendance</button>
        <button>💰 Payroll</button>
      </nav>
    </aside>
  );
}
