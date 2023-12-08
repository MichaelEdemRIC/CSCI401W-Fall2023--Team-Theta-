import {Button, Container, Nav, Navbar as NavbarBs} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { SearchBar } from "./SearchBar";
import { useWishlist } from "../context/WishlistContext";
import "../LoginApp.css"

export function AdminNav() {
    const { openList } = useWishlist()
    return (
        <NavbarBs 
            sticky="top" 
            className="navbar-brand navbar-light justify-content-between"
            style={{
                backgroundColor:"khaki"
            }}
        >
            <Container style={{}}>
                <Nav className="me-auto">
                    <Nav.Link to="/add" as={NavLink}>
                        Add Item
                    </Nav.Link>
                </Nav>              
            </Container>
        </NavbarBs>
    )
}
