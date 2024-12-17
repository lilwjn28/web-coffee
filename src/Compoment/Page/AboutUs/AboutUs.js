import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AboutUs.css";
import Contact from "../HomePage/Contact";
const AboutUs = () => {
  return (
    <div className="about-us">
      <Container>
        <Row className="about-header">
          <Col>
            <h1>Chào Mừng đến với Ông Xuân</h1>
            <p>Hương vị đậm đà, không gian thư giãn, và một câu chuyện đầy cảm hứng</p>
          </Col>
        </Row>
        <Row className="about-content">
          <Col lg={6}>
            {/* <h2>Về Chúng Tôi</h2> */}
            <p>
              Tại Ông Xuân, chúng tôi cam kết mang đến những tách cà phê ngon nhất với
              chất lượng đỉnh cao. Mỗi ly cà phê tại quán được chế biến từ những hạt
              cà phê nguyên chất, được lựa chọn kỹ lưỡng từ các nông trại nổi tiếng.
              Chúng tôi không chỉ cung cấp cà phê, mà còn mang đến một trải nghiệm
              thư giãn, thoải mái cho bạn.
            </p>
            {/* */}
          </Col>
          <Col lg={6}>
          <p>
              <img src="https://capherangxay.vn/wp-content/uploads/2023/10/146f2e5fdddb96cc39284f1bd030ade2.jpg" alt="Ông Xuân Coffe" />
            </p> 
           
          </Col>
        </Row>
        <Row className="our-mission">
          <Col>
            <h2>Sứ Mệnh Của Chúng Tôi</h2>
            <p>
             Ông Xuân không chỉ là một thương hiệu cà phê. Chúng tôi mong muốn xây dựng một
              cộng đồng yêu cà phê, nơi mọi người có thể tìm thấy niềm vui trong mỗi
              tách cà phê và cảm nhận sự kết nối với nhau.
            </p>
            <p>
              Chúng tôi nỗ lực không ngừng để mang đến cho khách hàng những trải nghiệm
              tốt nhất về hương vị cà phê, dịch vụ tận tâm và không gian đậm chất riêng.
            </p>
          </Col>
        </Row>
        <Row className="team">
          <Col>
            <h2>Đội Ngũ Của Chúng Tôi</h2>
            <p>
              Đội ngũ nhân viên tại Ông Xuân là những người yêu cà phê, tận tâm và luôn
              sẵn sàng phục vụ bạn với sự thân thiện và chuyên nghiệp. Chúng tôi luôn
              cố gắng tạo ra môi trường làm việc và phục vụ tốt nhất cho khách hàng.
            </p>
          </Col>
        </Row>
        <Row className="contact">
          <Col>
            <Contact></Contact>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
