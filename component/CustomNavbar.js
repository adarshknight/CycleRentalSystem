import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand as={Link} to="/">Bikes2Ride</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/bikes2ride">Bikes2Ride</Nav.Link>
          {/* Add more navbar links here */}
        </Nav>
        <Nav>
          <NavDropdown
            title="My Profile"
            id="basic-nav-dropdown"
            show={showDropdown}
            onMouseEnter={handleDropdownToggle}
            onMouseLeave={handleDropdownToggle}
          >
            <NavDropdown.Item as={Link} to="/my-trips">My Trips</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/wallet">Wallet</NavDropdown.Item> {/* Link to Wallet */}
            <NavDropdown.Item href="/billstatement">Bill Statement</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#sign-out">Sign Out</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
