
import { Link } from 'react-router-dom'
import axios from 'axios';

import '../LoginApp.css'
import { ChangeEvent, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
    const registerURL = "http://localhost:8000/signup/";
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [token, setToken] = useState<string>('');
    const navigate = useNavigate();

    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
      };
    
      const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
      };

      const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent the default form submission\
        
        // Log the data before sending the request
        console.log("Data to be sent:", { username, password });

        try {
            const response = await axios.post(registerURL, { username, password });
            console.log("Response:", response.data);
            const token = response.data.token;
            setToken(token)
            navigate('/');
        } catch (error:any) {
            console.error("Error:", error.message);
            // Handle errors, such as displaying an error message to the user
        }
    };
    return (
        <div className="text-center m-5-auto">
            <h2>Join us for great deals</h2>
            <h5>Create an account</h5>
            <form action="/home" className="login" onSubmit={handleSubmit}>
                <p>
                    <label>create a Username</label><br/>
                    <input 
                       onChange={handleUsernameChange} 
                       type="text" 
                       name="username" 
                       value={username}
                       required 
                    />
                </p>
                
                <p>
                    <label>create a Password</label><br/>
                    <input 
                        onChange={handlePasswordChange} 
                        type="password" 
                        name="password" 
                        value={password}
                        required 
                    />
                </p>
                
                <p>
                    <button id="sub_btn" className="btn btn-warning" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}