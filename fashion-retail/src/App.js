import "./App.css";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Data from "./data.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Aboutpage from "./About.js";
import Collectionspage from "./Collections.js";
import Contactpage from "./Contact.js";
import Homepagepage from "./Homepage.js";
import Signinpage from "./Signin.js";
import Shoppingcartpage from "./ShoppingCart.js";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/About" Component={Aboutpage} />
        <Route path="/Collections" Component={Collectionspage} />
        <Route path="/Contact" Component={Contactpage} />
        <Route path="/Homepage" Component={Homepagepage} />
        <Route path="/Signin" Component={Signinpage} />
        <Route path="/ShoppingCart" Component={Shoppingcartpage} />
      </Switch>
      <div className="App">
        <Header />
        <Data />
        <Footer />
      </div>
    </Router>
  );
}
