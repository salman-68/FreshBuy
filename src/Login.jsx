import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./store";
import "bootstrap/dist/css/bootstrap.min.css";  // Import Bootstrap

function Login() {
  const userName = useRef(null);
  const userPassword = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const OnLogin = () => {
    if (userName.current.value === "Salman" && userPassword.current.value === "Sadat@123") {
      dispatch(login(userName.current.value));
      navigate("/home");
    } else {
      alert("You have entered wrong credentials, please check once.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Login</h2>
        <div className="mb-3">
          <label className="form-label">User Name:</label>
          <input type="text" ref={userName} className="form-control" placeholder="Enter Name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input type="password" ref={userPassword} className="form-control" placeholder="Enter Password"/>
        </div>
        <button onClick={OnLogin} className="btn btn-primary w-100">Login</button>
      </div>
    </div>
  );
}

export default Login;
