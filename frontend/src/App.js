import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import Recruitment from "./pages/Recruitment";
import Attendance from "./pages/Attendance";
import Tasks from "./pages/Tasks";
import Payroll from "./pages/Payroll";
import Admin from "./pages/Admin";

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<EmployeeDashboard />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
