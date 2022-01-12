import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import CardProfileNavbar from "./CardProfileNavbar";
import { Link } from "react-router-dom";
import "../assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const NavbarHeader = () => {
  const getStatusLoginFromLocalStorage = localStorage.getItem("IS_LOGIN");
  const getUsernameFromLocalStorage = localStorage.getItem("LOCAL_STORAGE_USERNAME");
  console.log(getStatusLoginFromLocalStorage);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="header-text-title">Suwit Games</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            {getStatusLoginFromLocalStorage === "true" ? (
              <NavDropdown title={getUsernameFromLocalStorage.replace(/"/g, "")}>
                <CardProfileNavbar />
              </NavDropdown>
            ) : (
              <Nav>
                <Link to="/" className="nav-link header-text-title">
                  Login
                </Link>
                <Link to="/register" className="nav-link header-text-title">
                  Register
                </Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarHeader;
