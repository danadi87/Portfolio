import React from "react";
import Header from "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./STYKKER.png";
import Signin from "./Signin";
<<<<<<< Updated upstream
=======
import ShoppingCart from "./ShoppingCart";
import About from "./About";
import Collections from "./Collections";
import Sustainability from "./Sustainability";
import Contact from "./Contact";
import Main from "./Main";
>>>>>>> Stashed changes

export default function ShowNavbar() {
  return (
    <div className="navigationBar">
      <a classname="active" href="./src/Main.js">
        <img src={logo} href="./STYKKER.png" alt="logo" className="logo" />
      </a>
      <nav>
        <div className="navigation">
          <ul className="navigationItems">
            <li>
              <a className="services" href="./src/About.js">
                About
              </a>
            </li>
            <li>
              <a href="./src/Collections.js" className="services">
                Collections
              </a>
            </li>
            <li>
              <a href="./src/Sustainability.js" className="services">
                Sustainability
              </a>
            </li>
            <li>
              <a href="./src/Contact.js" className="services">
                Contact
              </a>
            </li>
            <li>
              <a href="./src/ShoppingCart.js" className="services">
                Shopping cart
              </a>
            </li>
            <li>
<<<<<<< Updated upstream
              <a href="Signin.js" className="services">
                Login
=======
              <a href="./src/Signin.js" className="services">
                Sign in
>>>>>>> Stashed changes
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
