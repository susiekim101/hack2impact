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
            <div className="heading-container">
                <h4 className="heading-small">Interior Design Quiz</h4>
                <h1 className="heading-large">TORI IN THE HOUSE</h1>
            </div>
            
            <div className="button-container">
                <button className="rounded-button" onClick={handleStart}> START </button>
            </div>
        </>
    );
}

export default Home;