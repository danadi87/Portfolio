import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./STYKKER.png";

export default function ShowNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="navigationBar">
      <Navbar.Brand as={Link} to="/Main">
        <img src={logo} alt="logo" className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/About" className="services">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/Collections" className="services">
            Collections
          </Nav.Link>
          <Nav.Link as={Link} to="/Sustainability" className="services">
            Sustainability
          </Nav.Link>
          <Nav.Link as={Link} to="/Contact" className="services">
            Contact
          </Nav.Link>
          <Nav.Link as={Link} to="/ShoppingCart" className="services">
            Shopping Cart
          </Nav.Link>
          <Nav.Link as={Link} to="/Signin" className="services">
            Sign In
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
