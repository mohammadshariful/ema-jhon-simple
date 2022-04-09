import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  const location = useLocation();
  const from = location.state?.from.pathname || "/";
  user && navigate(from, { replace: true });
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">login</h2>
        <form onSubmit={handleUserSignIn}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" required />
          </div>
          <p style={{ color: "red" }}>{error?.message}</p>
          {loading && <p>Loading</p>}
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
