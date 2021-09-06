import React from "react";
import Slider from "infinite-react-carousel";
import { formatDate } from "../utils/utils";

const Carousel = ({ hero_slides, hero_text }) => {
  const insertLineBreak = (str, target) => {
    let newString = str.replace(target, target + "\n");
    return newString;
  };

  return (
    <div>
      {hero_slides && (
        <div className="carousel">
          <Slider
            dots
            autoplay={true}
            autoplaySpeed={5000}
            arrows={false}
            pauseOnHover={false}
          >
            {hero_slides &&
              hero_slides.map((slide) => (
                <div key={slide.image}>
                  <img
                    className="carousel-img"
                    src={slide.image}
                    alt={slide.alt}
                  />
                  <div className="carousel-text">
                    <div className="carousel-title">
                      {insertLineBreak(hero_text.title, ": ")}
                    </div>
                    <div className="carousel-date">
                      {formatDate(hero_text.date)}
                    </div>
                    <div className="carousel-subtitle">
                      {insertLineBreak(hero_text.subtitle, "2 ")}
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default Carousel;
