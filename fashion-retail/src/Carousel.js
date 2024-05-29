import "./carousel.css";
import React, { useState } from "react";

export default function Slider() {
  const containerStyles = {
    height: "80%",
    width: "80%",
    marginBottom: "15%",
    position: "relative", // Add relative positioning to container
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
    height: "auto",
    backgroundSize: "contain", // Adjust background size
    backgroundPosition: "center", // Center the background image
    maxWidth: "100%",
    minHeight: "300px",
    transition: "background-image 0.5s ease-in-out", // Smooth transition
    key: index,
  };

  const buttonStyles = {
    fontSize: "50px",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    background: "rgba(255, 255, 255, 0.5)", // Button background for visibility
    padding: "10px",
    borderRadius: "50%",
  };

  return (
    <div style={containerStyles} className="container">
      <div style={slideStyles}>
        <div
          style={{ ...buttonStyles, left: "20px" }} // Position to the left
          onClick={() =>
            setIndex((prevIndex) =>
              prevIndex > 0 ? prevIndex - 1 : images.length - 1
            )
          } // Loop to the last image
        >
          <img className="carousel-button" src="Back.svg" alt="backwards" />
        </div>
        <div
          style={{ ...buttonStyles, right: "20px" }} // Position to the right
          onClick={() =>
            setIndex((prevIndex) =>
              prevIndex < images.length - 1 ? prevIndex + 1 : 0
            )
          } // Loop to the first image
        >
          <img className="carousel-button" src="Next.svg" alt="forward" />
        </div>
      </div>
    </div>
  );
}
