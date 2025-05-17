import './Login.css';

export default function Login() {
    console.log("Login component rendered");
  return (
    <div className='container'>
        <div>
            <p>login</p>
        </div>
        <div>
            <input type="text" placeholder="username"/>
        </div>
        <div>
            <input type="text" placeholder="password"/>
        </div>
    </div>
  );
}
