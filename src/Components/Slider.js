import React from "react";
import { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import SliderImage from "./Image";

import "./Slider.css";

const Slider = ({ slides }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = slides.length - 1;

    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, slides]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className="center">
      {slides.map((slide, slideIndex) => {
        const { id, image } = slide;

        let position = "nextSlide";
        if (slideIndex === index) {
          position = "activeSlide";
        }
        if (
          slideIndex === index - 1 ||
          (index === 0 && slideIndex === slides.length - 1)
        ) {
          position = "lastSlide";
        }

        return (
          <SliderImage key={id} image={image} position={position}></SliderImage>
          // <article key={id} className={position}>
          //   <img src={image} style={{ width: "100%", height: "100%" }} />
          // </article>
        );
      })}
      <button className="prev" onClick={() => setIndex(index - 1)}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={() => setIndex(index + 1)}>
        <FiChevronRight />
      </button>
    </div>
  );
};

export default Slider;
