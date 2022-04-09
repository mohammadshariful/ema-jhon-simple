import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">login</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" required />
          </div>
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p>
          New to Ema-Jhon ?
          <Link className="form-link" to="/signup">
            Create an account
          </Link>
        </p>
        <div className="line">
          <span className="border-line"></span>
          <span>or</span>
          <span className="border-line"></span>
        </div>
        <button className="google-signin-btn">
          <p>Continue with Google</p>
        </button>
      </div>
    </div>
  );
};

export default Login;
