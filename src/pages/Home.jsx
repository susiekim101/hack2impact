import logo from '../assets/torilogo.png';
import styles from '../css/Home.module.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Home.css'; // Assuming you have a CSS file for styling

function Home() {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/quiz');
    };

    return (
        <>
        <div className={styles.container}>
            <img src={styles.logo} alt="Tori in the House Logo" className="logo-image"/>
            <h1 class='text-sm'>Interior Design Quiz</h1>
        </div>

        <div className={styles.button-container}>
            <button className={styles.rounded-button} onClick={handleStart}> START </button>
        </div>
        </>
    );
}

export default Home;