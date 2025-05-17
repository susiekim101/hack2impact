import styles from '../css/Login.module.css';

export default function Login() {
  return (
    <div className={styles.container}>
        <div>
            <p>Login</p>
        </div>
        <form method="/" action="/login">
            <input type="text" placeholder="email"/>
            <input type="text" placeholder="password"/>
            <button type="submit">Submit</button>
        </form>
    </div>
  );
}
