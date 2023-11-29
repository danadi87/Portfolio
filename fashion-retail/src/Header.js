import React from "react";
import Header from "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./STYKKER.png";
import Signin from "./Signin";

export default function ShowNavbar() {
  return (
    <div className="navigationBar" href="#home">
      <img src={logo} href="./STYKKER.png" alt="logo" className="logo" />
      <nav>
        <div className="navigation">
          <ul className="navigationItems">
            <li>
              <a className="active" href="#home">
                About
              </a>
            </li>
            <li>
              <a href="#features" className="main">
                Collections
              </a>
            </li>
            <li>
              <a href="#features" className="main">
                Sustainability
              </a>
            </li>
            <li>
              <a href="#pricing" className="services">
                Contact
              </a>
            </li>
            <li>
              <a href="#pricing" className="services">
                Shopping cart
              </a>
            </li>
            <li>
              <a href="Signin.js" className="services">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
