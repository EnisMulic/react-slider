import React from "react";
import "./Image.css";
const Image = ({ id, image, position }) => {
  return (
    <article key={id} className={position}>
      <img src={image} style={{ width: "100%", height: "100%" }} />
    </article>
  );
};

export default Image;
