


import { Link } from 'react-router-dom'

import "../LoginApp.css"


export default function RegisterPage() {

    return (
        <div className="text-center m-5-auto">
            <h2>Join us for great deals</h2>
            <h5>Create your personal account</h5>
            <form action="/home">
                <p>
                    <label>create a Username</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                
                <p>
                    <label>create a Password</label><br/>
                    <input type="password" name="password" required/>
                </p>
                
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}