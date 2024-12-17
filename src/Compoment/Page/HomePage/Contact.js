import React, { useState } from "react";
import "./Contact.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import usePageTitle from "../../../Features/TitlePage";
import axios from "axios";
// import Tinh from "../Order/APIForm";  // Nếu cần sử dụng Tinh

const Contact = () => {
  const [validated, setValidated] = useState(false);
  const [dataContact, setDataContact] = useState({
    fullname: "",
    email: "",
    phone: "",
    des: "",
  });

  // Hàm xử lý gửi dữ liệu form
  const handlePostContact = async (e) => {
    e.preventDefault(); // Ngừng hành động mặc định của form
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      try {
        const response = await axios.post("http://localhost:3301/contact", dataContact);
  
        if (response.status === 201) {
          console.log("Dữ liệu đã gửi thành công:", response.data);
          alert("Gửi thông tin thành công!");
        } else {
          console.log("Lỗi từ server:", response.status, response.data);
          alert("Lỗi khi gửi thông tin!");
        }
      } catch (error) {
        console.error("Lỗi khi gửi dữ liệu:", error.response || error.message);
        alert("Lỗi khi gửi thông tin!");
      }
    }
    setValidated(true);
  };
  

  return (
    <div className="contact space-compoment">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="contact-form">
              <h2>Để lại thông tin tại đây</h2>
              {/* Sử dụng Form từ react-bootstrap */}
              <Form noValidate validated={validated} onSubmit={handlePostContact}>
                {/* Tên đầy đủ */}
                <Form.Group className="mb-3" controlId="formContactFullName">
                  <Form.Label>Tên của quý khách</Form.Label>
                  <Form.Control
                    required
                    size="lg"
                    type="text"
                    placeholder="Nhập tên của quý khách"
                    onChange={(e) =>
                      setDataContact({ ...dataContact, fullname: e.target.value })
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Vui lòng nhập tên của quý khách.
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Email */}
                <Form.Group className="mb-3" controlId="formContactEmail">
                  <Form.Label>Email của quý khách</Form.Label>
                  <Form.Control
                    required
                    size="lg"
                    type="email"
                    placeholder="Nhập email"
                    onChange={(e) =>
                      setDataContact({ ...dataContact, email: e.target.value })
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Vui lòng nhập email.
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Số điện thoại */}
                <Form.Group className="mb-3" controlId="formContactPhone">
                  <Form.Label>Số điện thoại của quý khách</Form.Label>
                  <Form.Control
                    required
                    size="lg"
                    type="tel"
                    placeholder="Nhập số điện thoại"
                    onChange={(e) =>
                      setDataContact({ ...dataContact, phone: e.target.value })
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Vui lòng nhập số điện thoại.
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Ghi chú */}
                <Form.Group className="mb-3" controlId="formContactDes">
                  <Form.Label>Ghi chú thêm</Form.Label>
                  <Form.Control
                    required
                    size="lg"
                    type="text"
                    placeholder="Nhập ghi chú"
                    onChange={(e) =>
                      setDataContact({ ...dataContact, des: e.target.value })
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Vui lòng nhập ghi chú.
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Nút gửi */}
                <Button variant="primary" type="submit">
                  Gửi thông tin
                </Button>
              </Form>
            </div>
          </Col>

          {/* Thông tin liên hệ */}
          <Col lg={6}>
            <div className="contact-info flex flex-column">
              <h2>THÔNG TIN LIÊN HỆ</h2>
              <ul>
                <li>
                  <strong>Địa chỉ:</strong> Đường số 23, Phường 11, Quận 6,
                  Thành phố Hồ Chí Minh, Việt Nam
                </li>
                <li>
                  <strong>Gọi ngay :</strong> 0387039792
                </li>
                <li>
                  <strong>Gửi mail :</strong> thangvuong843@gmail.com
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
