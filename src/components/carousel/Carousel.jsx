import React from "react";
import carouselStyles from "./Carousel.module.css";

const Carousel = ({ children }) => {
  return <div className={carouselStyles.carousel}>{children}</div>;
};

export default Carousel;
