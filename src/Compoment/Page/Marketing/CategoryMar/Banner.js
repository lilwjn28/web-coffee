import React from "react";
import anniBanner1 from "../../../../Asset/Images/ani-banner-1.png";
import "./Banner.css";
import useAxios from "../../../../Context/API/UseAxios";
import { Col, Container, Form, Row } from "react-bootstrap";
import personBanner from "../../../../Asset/Images/Homepage/image-banner/banner.jpg";
import bgPersonBanner from "../../../../Asset/Images/Homepage/image-banner/header-imgbg-1.png";
import Sudan from "../../../../Asset/Images/Homepage/image-banner/ly-cafe-vector.jpg";
import dataImages from "../../../../Asset/Images/Homepage/image-banner/header-author-img1.png";
import elements2 from "../../../../Asset/Images/Homepage/image-banner/elements2.png";
import elements3 from "../../../../Asset/Images/Homepage/image-banner/elements3.png";
import loudspeaker from "../../../../Asset/Images/Homepage/image-banner/sound-icons1.svg";
import lite from "../../../../Asset/Images/Homepage/image-banner/lite-icons1.svg";
import { Link } from "react-router-dom";

const Banner = () => {
  const cate = [
    {
      "id": "1",
      "category": "Arabica",
      "title": "Arabica"
    },
    {
      "id": "2",
      "category": "Robusta",
      "title": "Robusta"
    },
    {
      "id": "3",
      "category": "Culi",
      "title": "Culi"
    },
    
  ]
  return (
    <div className="banner-marketing flex flex-column">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="content-banner">
              <h4>CÀ PHÊ RANG XAY,ĐỘC ĐÁO TỪNG HẠT</h4>
              <h2>Cà phê rang xay trực tiếp từ vùng cao nguyên, giữ trọn hương vị tự nhiên và tinh túy của núi rừng.</h2>
              <p>
                Cà phê rang xay trực tiếp từ vùng cao nguyên, giữ trọn hương vị tự nhiên, đóng gói tiện lợi, giao hàng nhanh chóng đến tận tay bạn.
              </p>
              <div className="contact flex flex-columns">
                <Form.Select aria-label="Default select example">
                  <option>Loại cafe bạn muốn tìm là gì ?</option>
                  {cate.map((item) => (
                    <option value={item.category}>{item.title}</option>
                  ))}
                  <option value="other">Khác</option>
                </Form.Select>
                <Form.Select aria-label="Default select example">
                  <option>Bạn cần tìm dịch vụ gì ?</option>
                  <option value="thietkewebsite">Nguyên Hạt</option>
                  <option value="thietkewebsite">Xay bột</option>
                  <option value="other">Khác</option>
                </Form.Select>
                <div className="submit flex flex-row">
                  <button>Tìm kiếm</button>
                  <span>Hoặc</span>
                  <Link to="/contact" className="contact-banner">
                    Liên hệ ngay
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="image-banner flex">
              <img src={personBanner} alt="" />
              <img className="bg-person-banner" src={bgPersonBanner} alt="" />
              <img className="loudspeaker" src={loudspeaker} alt="" />
              <img className="sudan" src={Sudan} alt="" />
              <img className="data-images" src={dataImages} alt="" />
              <img className="lite" src={lite} alt="" />
              <img className="elements2" src={elements2} alt="" />
              <img className="elements3" src={elements3} alt="" />
            </div>
          </Col>
        </Row>
        <div className="anni">
          <img src={anniBanner1} alt="" />
        </div>
      </Container>
      
    </div>
  );
};

export default Banner;
