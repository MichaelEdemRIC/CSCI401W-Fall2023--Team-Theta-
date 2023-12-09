
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import '../LoginApp.css'
import { ChangeEvent, useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
    const { login, logout } = useAuth();
    const loginURL = "http://localhost:8000/login/";
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    logout()
    const navigate = useNavigate();
    
    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
      };
    
      const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
      };

      const loginData = {
        username,
        password,
      };
      const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent the default form submission\
        
        // Log the data before sending the request
        console.log("Data to be sent:", { username, password });
        console.log(JSON.stringify(loginData))
        try {
            const response = await axios.post(loginURL, JSON.stringify(loginData), {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log("Response:", response.data);
            sessionStorage.setItem('token', response.data.token);
            sessionStorage.setItem('user', username);
            console.log("Local Storage:", localStorage);
            login();
            navigate('/');
        } catch (error:any) {
            console.error("Error:", error.message);
            if (error.response && error.response.status === 404) {
                // Set the error message for user not found
                setErrorMessage('Username or password is invalid.');
            } else {
                // Handle other errors or display a generic error message
                setErrorMessage('An unexpected error occurred.');
            }
        }
    };
    return (
        <div className="text-center m-5-auto">
            <h2>Sign in</h2>
            <form action="/home" className="login" onSubmit={handleSubmit}>
                <p>
                    <label>Username</label><br/>
                    <input 
                        onChange={handleUsernameChange} 
                        type="text" 
                        name="username" 
                        value={username}
                        required 
                    />
                </p>
                <p>
                    <label>Password</label>
                    <br/>
                    <input 
                        onChange={handlePasswordChange} 
                        type="password" 
                        name="password" 
                        value={password}
                        required 
                    />
                </p>
                <p>
                    <button 
                            className="btn btn-warning" 
                            id="sub_btn" 
                            type="submit"
                        >
                            Login
                    </button>
                </p>
            </form>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}