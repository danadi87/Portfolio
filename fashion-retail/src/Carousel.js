import "./carousel.css";
import React, { useState } from "react";

export default function Slider() {
  const containerstyles = {
    height: "1200px",
    width: "1200px",
    margingBottom: "15%",
  };
  const images = [
    "outfit1.png",
    "outfit2.png",
    "outfit3.png",
    "outfit4.png",
    "outfit5.png",
    "outfit6.png",
    "outfit7.png",
    "outfit8.png",
  ];
  const [index, setIndex] = useState(0);
  const slidestyles = {
    backgroundImage: `url(${images[index]})`,
    height: "1200px",
    backgroundSize: "cover",
    width: "100%",
  };
  return (
    <div images={images} style={containerstyles} className="container">
      <div style={slidestyles}>
        <div
          style={{
            fontSize: "50px",
            position: "absolute",
            top: "50%",
            right: "80%",
            cursor: "pointer",
          }}
          onClick={() => {
            if (index > 0) {
              setIndex(index - 1);
            }
          }}
        >
          <img
            className="carousel-button"
            src="backwards.186x256.png"
            alt="backwards"
          />
        </div>
        <div
          style={{
            fontSize: "50px",
            position: "absolute",
            top: "50%",
            left: "80%",
            cursor: "pointer",
          }}
          onClick={() => {
            if (index < images.length - 1) {
              setIndex(index + 1);
            }
          }}
        >
          <img
            className="carousel-button"
            src="forward.186x256.png"
            alt="forward"
          />
        </div>
      </div>
    </div>
  );
}
