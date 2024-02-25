import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from React Router

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/" className="navbar-brand">Electronics Shop</Link> {/* Use Link instead of Navbar.Brand */}
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link> {/* Use Link for navigation */}
          <Nav.Link as={Link} to="/products">Products</Nav.Link> {/* Use Link for navigation */}
          <Nav.Link as={Link} to="/about">About</Nav.Link> {/* Use Link for navigation */}
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link> {/* Use Link for navigation */}
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/login">Login</Nav.Link> {/* Add login link */}
          <Nav.Link as={Link} to="/register">Register</Nav.Link> {/* Add register link */}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar; 
