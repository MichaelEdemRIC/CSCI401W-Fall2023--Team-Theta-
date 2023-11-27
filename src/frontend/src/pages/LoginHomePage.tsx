
import { Link } from 'react-router-dom'

export default function LoginHomePage() {
    return (
        <div className="text-center">
            <h1 className="main-title home-page-title">welcome to our Pawsume prices</h1>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
    )
}