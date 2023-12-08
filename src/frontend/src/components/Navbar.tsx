import { Container, Nav, Navbar as NavbarBs} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { SearchBar } from "./SearchBar";
import "../LoginApp.css"
import { UserButtons } from "./UserButtons";

export function Navbar() {
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
                <UserButtons/>               
            </Container>
        </NavbarBs>
    )
}
