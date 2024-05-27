import "./App.css";
import Data from "./data.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About.js";
import Collections from "./Collections.js";
import Contact from "./Contact.js";
import Homepage from "./Homepage.js";
import Signin from "./Signin.js";
import Shoppingcart from "./ShoppingCart.js";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Homepage} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/collections" component={Collections} />
        <Route path="/signin" component={Signin} />
        <Route path="/shoppingcart" component={Shoppingcart} />
        </Routes>
    </Router>
  );

  function Home() {
    return <h1>Home Page</h1>;
  }

  function About() {
    return <h1>About Page</h1>;
  }

  function Contact() {
    return <h1>Contact Page</h1>;
  }
  function Collections() {
    return <h1>Contact Page</h1>;
  }
  function Signin() {
    return <h1>Contact Page</h1>;
  }
  function Shoppingcart() {
    return <h1>Contact Page</h1>;
  }
}
