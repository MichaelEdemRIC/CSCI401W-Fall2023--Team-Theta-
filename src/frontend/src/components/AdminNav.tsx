import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink, Route, Routes } from "react-router-dom";
import "../LoginApp.css";
import { useAuth } from "../context/AuthContext";
import AdminAddItem from "../pages/AdminAddItem";

export function AdminNav() {
  const { isAdmin } = useAuth();

  // Use a key to force a re-render when isAdmin changes
  const key = isAdmin ? "admin" : "non-admin";

  if (isAdmin) {
    
    return (
    <>
      <NavbarBs
        key={key}
        className="navbar-brand navbar-light justify-content-between"
        style={{
          backgroundColor: "khaki",
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

      <Routes>
        <Route path="/add" element={<AdminAddItem />} />
      </Routes>
    </>
    );
  } else {
    // Return null or an empty component if isAdmin is false
    return null;
  }
}

