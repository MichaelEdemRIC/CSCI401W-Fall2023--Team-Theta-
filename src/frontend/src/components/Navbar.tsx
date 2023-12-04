import {Button, Container, Nav, Navbar as NavbarBs} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { SearchBar } from "./SearchBar";
import { useWishlist } from "../context/WishlistContext";
import "../LoginApp.css"

export function Navbar() {
    const { openList } = useWishlist()
    return (
        <NavbarBs 
            sticky="top" 
            className="navbar-brand navbar-light justify-content-between"
            style={{
                backgroundColor:"skyblue"
            }}
        >
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>
                        <img 
                            src={"/imgs/pawsomepriceslogo.png"}
                            style={{
                                height: "4rem",  // Adjust the height as needed
                                width: "100%",   // Allow the width to adjust proportionally
                                objectFit: "contain",  // Adjust as needed (contain, cover, etc.)
                                position: "relative",
                              }}
                            />
                    </Nav.Link>
                </Nav>
                <SearchBar/>
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
                <Button
                    onClick={openList}
                    style={{ width: "3rem", height: "3rem", position: "relative" }}
                    className="rounded-circle btn btn-danger"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"></path>
                    </svg>
                </Button>
                
            </Container>
        </NavbarBs>
    )
}
