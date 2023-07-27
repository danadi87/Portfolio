import "./App.css";
import Header from "./Header";
import Carousel from "./Carousel.js";
import "./carousel.css";


export default function App(Children) {
  return (
    <div className="App">
      <Header />
      <div className="carousel-item">
        <Carousel />
      </div>
    </div>
  );
}
