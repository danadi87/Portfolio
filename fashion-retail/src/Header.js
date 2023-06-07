import React from "react";
import Header from "./Header.css";
import Bootstrap from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./sketch.png.jpg";

export default function ShowNavbar() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand className="brand" href="#home">
          <img src={logo} href="./sketch.png.jpg" alt="logo" width={60} />
          STYKKER
        </Navbar.Brand>
        <Nav className="mx-auto">
          <Nav.Link href="#home">About</Nav.Link>
          <Nav.Link href="#features">Collections</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
