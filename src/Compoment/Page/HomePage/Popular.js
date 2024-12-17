import React from "react";
import "./Popular.css";
import Slider from "react-slick";
import dataFeedback from "../../../Context/Data/DataFeedback";
import { Col, Row } from "react-bootstrap";
const Popular = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {dataFeedback.map((item) => (
          <div className="slide">
            <div className="flex flex-row">
              <div className="content">
                <p>{item.comment}</p>
                {[...Array(item.rating)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star"></i>
                ))}
                <p>{item.user}</p>
              </div>
              <div className="images">
                <img src={item.images} alt="" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Popular;
