import React, { useState } from "react";
import "../styles/register.css"; // Import CSS

const Register = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.username || !form.email || !form.password) {
      setError("All fields are required.");
      return;
    }
    // TODO: Add registration API logic here
    alert(`Registering user: ${form.username}`);
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Register</h2>

        <div className="register-field">
          <label className="register-label" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
            className="register-input"
            autoComplete="username"
          />
        </div>

        <div className="register-field">
          <label className="register-label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="register-input"
            autoComplete="email"
          />
        </div>

        <div className="register-field">
          <label className="register-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="register-input"
            autoComplete="new-password"
          />
        </div>

        {error && <div className="register-error">{error}</div>}

        <button type="submit" className="register-btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
