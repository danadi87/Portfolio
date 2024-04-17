import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./STYKKER.png";

export default function ShowNavbar() {
  return (
    <Navbar className="navigationBar">
      <Navbar.Brand as={Link} to="/Main">
        <img src={logo} alt="logo" className="logo" />
      </Navbar.Brand>
      <nav>
        <div className="navigation">
          <ul className="navigationItems">
            <li>
              <Link to="/About" className="services">
                About
              </Link>
            </li>
            <li>
              <Link to="/Collections" className="services">
                Collections
              </Link>
            </li>
            <li>
              <Link to="/Sustainability" className="services">
                Sustainability
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="services">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/ShoppingCart" className="services">
                Shopping cart
              </Link>
            </li>
            <li>
              <Link to="/Signin" className="services">
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Navbar>
  );
}
