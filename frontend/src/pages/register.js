import React, { useState } from "react";

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
    // TODO: Add registration logic here (API call)
    alert(`Registering user: ${form.username}`);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "2.5rem 2.5rem 2rem 2.5rem",
          borderRadius: "18px",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
          minWidth: 350,
          border: "1.5px solid #e3e8f0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            marginBottom: "1.5rem",
            textAlign: "center",
            fontWeight: 700,
            fontSize: 28,
            color: "#1976d2",
            letterSpacing: 1,
          }}
        >
          Register
        </h2>
        <div style={{ marginBottom: "1.1rem", width: "100%" }}>
          <label style={{ display: "block", marginBottom: 7, fontWeight: 500, color: "#333" }} htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "11px 12px",
              borderRadius: 6,
              border: "1.5px solid #b6c6e3",
              fontSize: 16,
              outline: "none",
              transition: "border 0.2s",
              boxSizing: "border-box",
            }}
            autoComplete="username"
            onFocus={e => (e.target.style.border = '1.5px solid #1976d2')}
            onBlur={e => (e.target.style.border = '1.5px solid #b6c6e3')}
          />
        </div>
        <div style={{ marginBottom: "1.1rem", width: "100%" }}>
          <label style={{ display: "block", marginBottom: 7, fontWeight: 500, color: "#333" }} htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "11px 12px",
              borderRadius: 6,
              border: "1.5px solid #b6c6e3",
              fontSize: 16,
              outline: "none",
              transition: "border 0.2s",
              boxSizing: "border-box",
            }}
            autoComplete="email"
            onFocus={e => (e.target.style.border = '1.5px solid #1976d2')}
            onBlur={e => (e.target.style.border = '1.5px solid #b6c6e3')}
          />
        </div>
        <div style={{ marginBottom: "1.1rem", width: "100%" }}>
          <label style={{ display: "block", marginBottom: 7, fontWeight: 500, color: "#333" }} htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "11px 12px",
              borderRadius: 6,
              border: "1.5px solid #b6c6e3",
              fontSize: 16,
              outline: "none",
              transition: "border 0.2s",
              boxSizing: "border-box",
            }}
            autoComplete="new-password"
            onFocus={e => (e.target.style.border = '1.5px solid #1976d2')}
            onBlur={e => (e.target.style.border = '1.5px solid #b6c6e3')}
          />
        </div>
        {error && (
          <div style={{ color: "#d32f2f", marginBottom: "1.1rem", textAlign: "center", width: "100%" }}>{error}</div>
        )}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px 0",
            background: "linear-gradient(90deg, #1976d2 60%, #42a5f5 100%)",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            fontWeight: 700,
            fontSize: 17,
            cursor: "pointer",
            marginTop: 10,
            boxShadow: "0 2px 8px rgba(25, 118, 210, 0.10)",
            letterSpacing: 0.5,
            transition: "background 0.2s, transform 0.1s",
          }}
          onMouseOver={e => (e.target.style.background = 'linear-gradient(90deg, #1565c0 60%, #1976d2 100%)')}
          onMouseOut={e => (e.target.style.background = 'linear-gradient(90deg, #1976d2 60%, #42a5f5 100%)')}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;