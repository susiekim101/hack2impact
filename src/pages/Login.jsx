import styles from "../css/Login.module.css";
import { login, loginWithGoogle } from "../firebase/auth.js";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [submitError, setSubmitError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

  setEmailError("");
  setPasswordError("");
  setSubmitError("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let valid = true;

  if (!emailRegex.test(email)) {
    setEmailError("Please enter a valid email address.");
    valid = false;
  }

  if (password.length < 6) {
    setPasswordError("Password must be at least 6 characters.");
    valid = false;
  }

  if (!valid) return;

    try {
      const user = await login(email, password);
      console.log("User logged in:", user);
      setError("");
      navigate("/quiz");
      // Redirect or perform any other action after successful login
    } catch (error) {
      setError("Login failed. Please check your credentials.");
      console.error("Error logging in:", error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const user = await loginWithGoogle();
      console.log("User logged in with Google:", user);
      // Redirect or perform any other action after successful login
    } catch (error) {
      setError("Login failed. Please try again.");
      console.error("Error logging in with Google:", error);
    }
  };

  console.log("Login component rendered");
  return (
    <div className={styles.container}>
      <div>
        <p>Log In</p>
      </div>
      <form onSubmit={handleLogin} noValidate>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            setEmailError("")
          }}
          required
        />
        {emailError && <p className={styles.errorText}>{emailError}</p>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
            setPasswordError("")
          }}
          required
        />
        {passwordError && <p className={styles.errorText}>{passwordError}</p>}
        <button type="submit" className={styles.button}>Submit</button>
      </form>
      <button onClick={handleGoogleLogin} className={styles.googleButton}>Log in with Google</button>
      {error && <p className={styles.errorText}>{error}</p>}
      <Link to="/signup" className={styles.link}>
        Don't have an account? Sign up
      </Link>
    </div>
  );
}
