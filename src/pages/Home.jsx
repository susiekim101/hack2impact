import logo from "../assets/torilogo.png";
import styles from "../css/Home.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../Home.css";

function Home() {
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };
  const navigateSignup = () => {
    navigate("/signup");
  };

  return (
    <div className={styles.parentContainer}>
      <div className={styles.titleContainer}>
        <img
          src={logo}
          alt="Tori in the House Logo"
          className={styles.logoImage}
        />
        <h1 class="text-sm">Interior Design Quiz</h1>
      </div>

      <div className={styles.buttonContainer}>
        <button onClick={navigateSignup} className={styles.button}>
          Sign Up
        </button>
        <button onClick={navigateLogin} className={styles.button}>
          Log In
        </button>
      </div>
    </div>
  );
}

export default Home;
