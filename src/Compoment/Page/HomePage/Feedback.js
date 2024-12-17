import React from "react";
import Slider from "react-slick";
import dataFeedback from "../../../Context/Data/DataFeedback";
import "./Feedback.css";
import { Col, Row } from "react-bootstrap";
import Title from "../../Title/Title";
const Feedback = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    
    <div className="slider-container space-compoment">
      <Title
        des="Thông tin Ông Xuân"
        title="Khách hàng đánh giá chúng tôi trên Google Review"
      ></Title>
    </div>
  );
};

export default Feedback;
