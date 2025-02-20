import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Store user in Redux
    dispatch(registerUser(formData));

    // Store user in localStorage
    const existingUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    existingUsers.push(formData);
    localStorage.setItem("registeredUsers", JSON.stringify(existingUsers));

    alert("Registration successful!");
    setFormData({ username: "", password: "" });
    navigate("/Login");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(135deg, #007bff, #6610f2)",
        minHeight: "100vh",
      }}
    >
      <div
        className="card shadow-lg"
        style={{
          padding: "2rem",
          borderRadius: "15px",
          maxWidth: "400px",
          width: "90%",
        }}
      >
        <h2 className="text-center mb-4" style={{ color: "#007bff", fontWeight: "bold" }}>
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" style={{ fontWeight: "bold" }}>Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              style={{ borderWidth: "2px", borderRadius: "8px" }}
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ fontWeight: "bold" }}>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              style={{ borderWidth: "2px", borderRadius: "8px" }}
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn w-100"
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              fontWeight: "bold",
              borderRadius: "8px",
              padding: "10px",
            }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
