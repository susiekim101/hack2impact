import logo from '../assets/torilogo.png';
import styles from '../css/Home.module.css';

function Home() {
    return (
        <div className={styles.container}>
            <img src={styles.logo} alt="Tori in the House Logo" className="logo-image"/>
            <h1 class='text-sm'>Interior Design Quiz</h1>
        </div>
    );
}

export default Home;