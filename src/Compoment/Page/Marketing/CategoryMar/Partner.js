import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Partner.css"
import Slider from "react-slick";
import useAxios from "../../../../Context/API/UseAxios";
import Title from "../../../Title/Title";
const Partner = () => {
  const slidePartner = useAxios(
    "https://672c7ad91600dda5a9f89ece.mockapi.io/partner"
  );
  const settings = {
    infinite: true, // Lặp lại slider
    speed: 500, // Tốc độ chuyển slide
    slidesToShow: 4, // Số slide hiển thị cùng lúc
    slidesToScroll: 1, // Số slide cuộn mỗi lần
    autoplay: true, // Tự động chuyển slide
    pauseOnHover: true, //Dừng lại khi người dùng hover
    autoplaySpeed: 1500, // Thời gian giữa các lần chuyển
  };
  return (
    <>
      <div className="partner flex flex-row space-moment ">
        <Container>
          <Row>
            <Col lg={3}>
            <Title des="Thông tin các công ty " title="Trusted by company"></Title>
            </Col>
            <Col lg={9}>
            <div className="slide-partner mt-4">
            <Slider {...settings}>
          {slidePartner.map((item) => (
        <div>

            <img src={item.images} alt={item.title} />
        </div>

          ))}
      </Slider>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
      
    
      
    </>
  );
};

export default Partner;
