import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../app_firebase_init";
import './Header.css'


const Header = () => {
  
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };

  return (
    <div>
      <Navbar bg="body" expand="lg" >
        <Container fluid>
          <Navbar.Brand as={Link} to='/' >Tutor<span className="LogoSpan">H</span> </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
            </Nav>
            <Nav>
              {user ? (
                <Nav.Link onClick={logout} >Logout</Nav.Link>
              ) : (
                <Nav.Link as={Link} to='/login'>Login</Nav.Link>
          
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
