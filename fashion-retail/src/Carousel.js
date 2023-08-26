import "./carousel.css";
import React from "react";

function Profile() {
  return <img src="https://ibb.co/V2nqc36" alt="Outfit 1" />;
}

export default function Gallery() {
  return (
    <section>
      <h1>SHOP</h1>
      <Profile />
    </section>
  );
}
