import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
const NavBar = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark" expand="lg" >
                <Container>
                    <Navbar.Brand>ONLINE-EDUCATION</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/aboutUs">About Us</Nav.Link>
                            <Nav.Link as={Link} to="/contactUs">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;