import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.username || !form.password) {
      setError("Both fields are required.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Save token and redirect
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = () => {
    navigate("/register");
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
        <h2 style={{ marginBottom: 24, color: "#1976d2" }}>Login</h2>

        {error && (
          <div style={{ color: "red", marginBottom: 16 }}>{error}</div>
        )}

        <label htmlFor="username" style={{ display: "none" }}>
          Username
        </label>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "16px",
            border: "1px solid #bdbdbd",
            borderRadius: 6,
            fontSize: 16,
          }}
        />

        <label htmlFor="password" style={{ display: "none" }}>
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "16px",
            border: "1px solid #bdbdbd",
            borderRadius: 6,
            fontSize: 16,
          }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px 0",
            background: "linear-gradient(90deg, #1976d2 60%, #42a5f5 100%)",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            fontWeight: 700,
            fontSize: 17,
            cursor: loading ? "not-allowed" : "pointer",
            marginTop: 10,
            boxShadow: "0 2px 8px rgba(25, 118, 210, 0.10)",
            letterSpacing: 0.5,
            transition: "background 0.2s, transform 0.1s",
            opacity: loading ? 0.6 : 1,
          }}
          onMouseOver={(e) => {
            if (!loading) {
              e.target.style.background =
                "linear-gradient(90deg, #1565c0 60%, #1976d2 100%)";
            }
          }}
          onMouseOut={(e) => {
            if (!loading) {
              e.target.style.background =
                "linear-gradient(90deg, #1976d2 60%, #42a5f5 100%)";
            }
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <button
          type="button"
          onClick={handleRegister}
          style={{
            width: "100%",
            padding: "12px 0",
            background: "#fff",
            color: "#1976d2",
            border: "1.5px solid #1976d2",
            borderRadius: 6,
            fontWeight: 700,
            fontSize: 17,
            cursor: "pointer",
            marginTop: 14,
            boxShadow: "0 2px 8px rgba(25, 118, 210, 0.06)",
            letterSpacing: 0.5,
            transition: "background 0.2s, color 0.2s",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "#1976d2";
            e.target.style.color = "#fff";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "#fff";
            e.target.style.color = "#1976d2";
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Login;
