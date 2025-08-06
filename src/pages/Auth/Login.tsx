import React from "react";
import "./Auth.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Welcome Back 👋</h2>
        <p>Login to continue your health journey</p>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="auth-btn">Login</button>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
