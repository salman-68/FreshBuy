import React from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate(); // ✅ Move useNavigate inside the component

  return (
    <>
      {/* Admin Navbar */}
      <nav style={styles.navbar}>
        <a href="#" style={styles.navbarBrand}>
          Admin Panel
        </a>
      </nav>

      {/* Admin Page Content */}
      <div style={styles.container}>
        <h2 style={styles.heading}>Welcome to the Admin Page</h2>
        <div style={styles.row}>
          {/* Example Admin Options */}
          <div style={styles.col}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Manage Users</h3>
              <p style={styles.cardText}>View, edit, and delete users.</p>
              <button style={{ ...styles.button, backgroundColor: "#007bff" }}>Go</button>
            </div>
          </div>

          <div style={styles.col}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Manage Orders</h3>
              <p style={styles.cardText}>Track and update order statuses.</p>
              <button style={{ ...styles.button, backgroundColor: "#28a745" }}>Go</button>
            </div>
          </div>

          <div style={styles.col}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Manage Products</h3>
              <p style={styles.cardText}>Add, update, and remove products.</p>
              <button style={{ ...styles.button, backgroundColor: "#ffc107", color: "#000" }}>Go</button>
            </div>
          </div>

          {/* ✅ See Contact Details Section */}
          <div style={styles.col}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>See Contact Details</h3>
              <p style={styles.cardText}> View The Details.</p>
              <button 
                style={{ ...styles.button, backgroundColor: "#ffc107", color: "#000" }} 
                onClick={() => navigate("/admin/contacts")} // ✅ Fix onClick & Correct Route
              >
                Go
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Pure CSS Styling using JavaScript object
const styles = {
  navbar: {
    backgroundColor: "#343a40",
    padding: "15px",
    textAlign: "center",
  },
  navbarBrand: {
    color: "white",
    fontWeight: "bold",
    textDecoration: "none",
    fontSize: "20px",
  },
  container: {
    marginTop: "20px",
    padding: "20px",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  row: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  col: {
    flex: "1 1 300px",
    maxWidth: "300px",
  },
  card: {
    textAlign: "center",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "white",
  },
  cardTitle: {
    margin: "10px 0",
  },
  cardText: {
    marginBottom: "15px",
  },
  button: {
    padding: "10px 15px",
    border: "none",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default Admin;
