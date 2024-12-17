import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./infoProduct.css";
import cup from "../../../Asset/Images/Product-coffee/Cup.png";
import Contact from "./Contact";
const InfoProduct = () => {
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
        <div className="background-banner">
        <Row>
        
            <Col lg={6}>
              <ul className="info-product">
                <li>Thành phần: 100% Robusta </li>
                <li>Xuất xứ: Xã Al Bá, huyện Chư Sê, Tỉnh Gia Lai</li>
                <li>
                  Thông tin cảnh báo: Không dùng cho người bị dị ứng với thành
                  phần của sản phẩm
                </li>
                <li>Công thức rang: Medium roast</li>
                <li>
                  Xuất xứ: 124 Đinh Tiên Hoàng, Thị Trấn Chư Sê, Huyện Chư Sê,
                  Tỉnh Gia Lai
                </li>
                <li>
                  Hạn sử dụng: 1 năm kể từ ngày sản xuất - Ngày sản xuất in trên
                  bao bì.
                </li>
                <li>
                  Bảo quản và sử dụng: Cà phê rang giữ được chất lượng tốt nhất
                  trong vòng 14 ngày sau khi mở túi.
                </li>
                <li>
                  Điều kiện bảo quản phù hợp: Để ở nơi khô ráo, thoáng mát Tránh
                  ánh nắng trực tiếp từ mặt trời Không sử dụng khi có mùi lạ
                  hoặc hết hạn
                </li>
                <li>Bạn cần hỗ trợ: 0983.731.545</li>
              </ul>
            </Col>
            <Col lg={6}>
              <img src={cup} alt="" />
            </Col>
       
        </Row>
        </div>
      </Container>
    </div>
  );
};

export default InfoProduct;
