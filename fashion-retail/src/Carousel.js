import "./carousel.css";
import React, { useState } from "react";

export default function Slider() {
  const images = [
    "outfit11.png",
    "outfit2.png",
    "outfit3.png",
    "outfit4.png",
    "outfit5.png",
    "outfit6.png",
    "outfit7.png",
    "outfit8.png",
  ];

  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const slideStyles = {
    backgroundImage: `url(${images[index]})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "400px",
    width: "100%",
    transition: "background-image 0.5s ease-in-out",
  };

  const buttonStyles = {
    fontSize: "50px",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    background: "rgba(255, 255, 255, 0.5)",
    padding: "10px",
    borderRadius: "50%",
  };

  const containerStyles = {
    position: "relative",
    width: "80%",
    margin: "0 auto",
    marginBottom: "15%",
  };

  return (
    <div style={containerStyles}>
      <div style={slideStyles}></div>
      <div style={{ ...buttonStyles, left: "20px" }} onClick={handlePrev}>
        <img className="carousel-button" src="Back.svg" alt="backwards" />
      </div>
      <div style={{ ...buttonStyles, right: "20px" }} onClick={handleNext}>
        <img className="carousel-button" src="Next.svg" alt="forward" />
      </div>
    </div>
  );
}
