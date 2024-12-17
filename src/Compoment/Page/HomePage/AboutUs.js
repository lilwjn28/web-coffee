import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div className="about-us space-compoment">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="heading-page">
              <div className="text-center">
                <h2>About Product</h2>
                <h3>Know Product More</h3>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <div className="title">
              <h3>
                Cà phê <b className="text-brands">Ông Xuân</b> – Vị đậm Tây
                Nguyên, tinh hoa Chư Sê.
              </h3>
              <p className="paraphase">
                Cà phê <b className="text-brands">Ông Xuân</b> – thương hiệu cà
                phê Robusta 100% từ vùng đất Gia Lai. Mỗi hạt cà phê đến tay bạn
                là kết quả của mô hình Farm to Shop mà chúng tôi tự hào với
                nguồn nguyên liệu được trồng tại nông trại rộng 3HA tại Xã AlBá,
                Chư Sê, Gia Lai. Chúng tôi cam kết mang đến cho bạn trải nghiệm
                cà phê chân thực và đậm đà nhất. Chúng tôi luôn sẵn sàng lắng
                nghe và phục vụ quý khách.
                <br /> <br />
                Trân trọng, <br />
                <b className="text-brands">Ông Xuân</b> Coffee
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <iframe
              src="https://www.youtube.com/embed/vpDO9LZbr1E"
              title="Mô hình cafe rang xay tại chỗ"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
