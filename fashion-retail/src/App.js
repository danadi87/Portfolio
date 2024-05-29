import "./App.css";
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
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/shoppingcart" element={<Shoppingcart />} />
      </Routes>
    </Router>
  );
}
