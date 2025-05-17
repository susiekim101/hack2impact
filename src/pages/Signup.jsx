import styles from '../css/Login.module.css';

export default function Signup() {
  return (
    <div className={styles.container}>
        <div>
            <p>Sign up</p>
        </div>
        <form method="/" action="/login">
            <label>Email:
                <input type="text" placeholder="email"/>
            </label>
            <label>Password:
                <input type="text" placeholder="password"/>
            </label>
            <button type="submit">Submit</button>
        </form>
    </div>
  );
}