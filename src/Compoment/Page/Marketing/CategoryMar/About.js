import React from "react";
import "./About.css";
import { Col, Container, Row } from "react-bootstrap";
import BannerImages1 from "../../../../Asset/Images/arabica.jpg";
import BannerImages2 from "../../../../Asset/Images/robusta.jpg";
import BannerImages3 from "../../../../Asset/Images/culi.jpg";
import dataFeatures from "../../../../Context/Data/FeaturesPageMarketing";
import imageContentBanner from "../../../../Asset/Images/Product-Marketing/hand.png";
const About = () => {
  return (
    <div className="about-marketing">
      <Container>
        <Row className="list-about">
          <Col xl={4} lg={4} md={4} xs={4} sm={4}>
            <img src={BannerImages1} alt="" />
            <p>sản phẩm Arabica </p>
          </Col>
          <Col xl={4} lg={4} md={4} xs={4} sm={4}>
            <img src={BannerImages2} alt="" />
            <p>Sản phẩm Robusta</p>
          </Col>
          <Col xl={4} lg={4} md={4} xs={4} sm={4}>
            <img src={BannerImages3} alt="" />
            <p>Sản Phẩm CuLi</p>
          </Col>
        </Row>
      </Container>
     
    </div>
  );
};

export default About;
