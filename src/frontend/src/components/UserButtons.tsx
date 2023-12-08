import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button, Nav } from 'react-bootstrap';
import { useWishlist } from '../context/WishlistContext';

export function UserButtons() {
    const { isLoggedIn } = useAuth();
    const { openList } = useWishlist();

    if(isLoggedIn) {
        return (
            <>
                <Nav.Link to="/login" as={NavLink}>
                    <Button size="lg" className="rounded-5" variant="warning">
                        Logout
                    </Button>
                </Nav.Link>
                <Button
                    onClick={openList}
                    style={{ width: '3rem', height: '3rem', marginLeft: '50px' }}
                    className="rounded-circle"
                    variant="outline-danger"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-heart-fill"
                        viewBox="0 0 18 15"
                    >
                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"></path>
                    </svg>
                </Button>
            </>
        )
    } else {
        return (
            <Nav className="me-auto">
                <Nav.Link to="/login" as={NavLink}>
                    <Button size="lg" className="rounded-5" variant="warning">
                        Login
                    </Button>
                </Nav.Link>
                <Nav.Link to="/register" as={NavLink}>
                    <Button size="lg" className="rounded-5" variant="light">
                        Sign Up
                    </Button>
                </Nav.Link>
            </Nav>
        )
    }

}