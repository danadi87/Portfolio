import "./App.css";
import Header from "./Header";
import Carousel, { CarouselItem } from "./Carousel.js";
import carousel from "./carousel.css";

export default function App() {
  return (
    <div className="App">
      <Header />
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
  );
}
