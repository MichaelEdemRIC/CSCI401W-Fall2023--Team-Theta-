
import { Link } from 'react-router-dom'

import '../LoginApp.css'

export default function LoginPage() {
    return (
        <div className="text-center m-5-auto">
            <h2>Sign in</h2>
            <form action="/home" className="login">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button className="btn btn-warning" id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}