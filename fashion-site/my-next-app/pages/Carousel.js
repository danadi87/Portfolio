import "./carousel.css";
import React, { useState } from "react";


export default function Slider() {
  const containerStyles = {
    height: "80%",
    width: "80%",
    marginBottom: "15%",
    position: "relative",
    overflow: "hidden",
  };

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
    console.log("Current image path:", images[index]);

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
    height: "800px",
    backgroundSize: "contain",
    backgroundPosition: "center",
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
    zIndex: 1,
  };

  return (
    <div style={containerStyles} className="container">
      <div style={slideStyles}>
        <div style={{ ...buttonStyles, left: "20px" }} onClick={handlePrev}>
          <img className="carousel-button" src="Back.svg" alt="backwards" />
        </div>
        <div style={{ ...buttonStyles, right: "20px" }} onClick={handleNext}>
          <img className="carousel-button" src="Next.svg" alt="forward" />
        </div>
      </div>
    </div>
  );
}
