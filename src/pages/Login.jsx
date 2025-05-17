import styles from '../css/Login.module.css';

export default function Login() {
    console.log("Login component rendered");
  return (
    <div className={styles.container}>
        <div>
            <p>login</p>
        </div>
        <form method="/" action="/login">
            <input type="text" placeholder="username"/>
            <input type="text" placeholder="password"/>
            <button type="submit">submit</button>
        </form>
    </div>
  );
}
