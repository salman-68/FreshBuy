import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";  

function Login({ onLogin }) {
  const userName = useRef(null);
  const userPassword = useRef(null);
  const navigate = useNavigate();

  const OnLogin = (e) => {
    e.preventDefault();
    
    const enteredUsername = userName.current.value.trim();
    const enteredPassword = userPassword.current.value.trim();
  
    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    console.log("Registered Users:", registeredUsers);
  
    const userExists = registeredUsers.find(
      (user) => user.username === enteredUsername && user.password === enteredPassword
    );
  
    if (userExists) {
      localStorage.setItem("loggedInUser", JSON.stringify({ username: enteredUsername }));
      onLogin(enteredUsername);  // Update authentication state in App.jsx
      navigate("/home");
      alert("✅ You are logged in successfully!");
      console.log(`✅ Login Successful for: ${enteredUsername}`);
    } 
    else if (enteredUsername === "Admin" && enteredPassword === "Admin@1") {
      localStorage.setItem("loggedInUser", JSON.stringify({ username: "Admin" }));
      onLogin("Admin");  // Update authentication state in App.jsx
      navigate("/admin");
    } 
    else {
      alert("❌ Incorrect credentials! Please check your username and password.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={OnLogin}>
          <div className="mb-3">
            <label className="form-label">User Name:</label>
            <input 
              type="text" 
              ref={userName} 
              className="form-control" 
              placeholder="Enter Name" 
              autoComplete="username"
              required 
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input 
              type="password" 
              ref={userPassword} 
              className="form-control" 
              placeholder="Enter Password" 
              autoComplete="current-password"
              required 
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <div className="text-center mt-3">
          <Link to="/registrations">New user? Register here</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
