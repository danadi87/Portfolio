import { useState } from "react";
import { sculptureList } from "./data.js";
import carousel from "./carousel.css";

export default function Gallery() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>Next</button> 
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}
