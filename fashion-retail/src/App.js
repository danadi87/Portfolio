import "./App.css";
import Header from "./Header";
import Carousel, { CarouselItem } from "./Carousel.js";
import "./carousel.css";
import { Children } from "react";


export default function App(Children) {
  return (
    <div className="App">
      <Header />
      <div className="carousel-item">
        <Carousel>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
          <CarouselItem>Item 3</CarouselItem>
          <CarouselItem>Item 4</CarouselItem>
          <CarouselItem>Item 5</CarouselItem>
          <CarouselItem>Item 6</CarouselItem>
          <CarouselItem>Item 7</CarouselItem>
          <CarouselItem>Item 8</CarouselItem>
        </Carousel>
      </div>
    </div>
  );
}
