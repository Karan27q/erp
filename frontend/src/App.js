// Example for d:\erp\frontend\src\App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import EmployeeDashboard from "./pages/employeeDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/employeeDashboard" element={<EmployeeDashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;