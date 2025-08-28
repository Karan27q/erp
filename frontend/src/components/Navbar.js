import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-brand">EMS Portal</div>
      <nav className="nav-links">
        <NavLink to="/" end className="nav-item">
          Home
        </NavLink>
        <NavLink to="/dashboard" className="nav-item">
          Employee Dashboard
        </NavLink>
        <NavLink to="/recruitment" className="nav-item">
          Recruitment
        </NavLink>
        <NavLink to="/attendance" className="nav-item">
          Attendance
        </NavLink>
        <NavLink to="/tasks" className="nav-item">
          Task Assigning
        </NavLink>
        <NavLink to="/payroll" className="nav-item">
          Payroll
        </NavLink>
        <NavLink to="/admin" className="nav-item">
          Admin
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
