import styles from "../css/Login.module.css";
import { signup, signupWithGoogle } from "../firebase/auth.js";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const user = await signup(email, password);
      console.log("User signed up:", user);
        setError(""); 
      navigate("/quiz");
    } catch (error) {
      setError("Sign up failed. Please check your credentials.");
      console.error("Error signing up in:", error);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const user = await signupWithGoogle();
      console.log("User signuped up with Google:", user);
      setError("");
    } catch (error) {
      setError("Sign up failed. Please try again.");
      console.error("Error signing up with Google:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <p>Sign Up</p>
      </div>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleGoogleSignup}>Sign up with Google</button>
      {error && <p className={styles.errorText}>{error}</p>}
      <Link to="/login" className={styles.link}>Already have an account? Log in</Link>
    </div>
  );
}
