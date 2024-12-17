import React, { useEffect, useRef, useState } from "react";
import "./Order.css";
import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import axios from "axios";
import { UseCart } from "../../../Context/Data/Cart";
import HeadingPage from "../../Title/HeadingPage";
import ConvertPrice from "../../Global/Thumb/ConvertPrice";
import ApiForm from "../../../Context/API/ApiForm";

const Order = () => {
  const { cart, totalAmount, linkOrder } = UseCart();
  const form = useRef();
  const [method, setMethod] = useState("cod");
  const [customCode, setCustomCode] = useState();
  // const Code = CustomOrderCode();

  // useEffect(() => {
  //   setCustomCode(Code);
  // }, []);

  // if (useAxios(linkOrder).find((item) => item.customCode === customCode)) {
  //   setCustomCode(Code);
  //   console.log("newcode is: ", customCode);
  // } else {
  //   console.log("code is: ", customCode);
  // }

  const checkMethod = (e) => {
    setMethod(e.target.name);
  };
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      province: "",
      district: "",
      ward: "",
      location: "",
      message: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("Vui lòng điền HỌ của quý khách"),
      last_name: Yup.string().required("Vui lòng điền TÊN của quý khách"),
      email: Yup.string()
      .email("Invalid email address")
      .required("Vui lòng điền EMAIL của quý khách"),
      phone: Yup.string().required("Vui lòng điền SỐ ĐIỆN THOẠI của quý khách"),
      province: Yup.string().required("Vui lòng điền TỈNH"),
      district: Yup.string().required("Vui lòng điền Quận"),
      ward: Yup.string().required("Vui lòng điền XÃ"),
      location: Yup.string().required(
        "Địa chỉ/Tên công ty không được để trống"
      ),
     
    }),

    onSubmit: async (values) => {
      try {
        await axios.post("http://localhost:3301/dataorder", {
          firstname: values.first_name,
          lastname: values.last_name,
          email: values.email,
          phone: values.phone,
          province: values.province,
          district: values.district,
          ward: values.ward,
          location: values.location,
          message: values.message,
        });
        alert("Đặt đơn thành công");
      } catch (error) {
        console.log("Errors creating Product: ", error);
      }
    }
    
  });

  return (
    <div className="contact-form">
      <HeadingPage title="Thanh toán"></HeadingPage>

      <Container>
        <form ref={form} id="form-order" onSubmit={formik.handleSubmit}>
          <Row>
            <Col>
              <label htmlFor="first_name">Họ</label>
              <input
                type="text"
                onChange={formik.handleChange}
                name="first_name"
                id="first_name"
                placeholder="Họ của quý khách"
              />
              {formik.touched.first_name && formik.errors.first_name ? (
                <div className="error">{formik.errors.first_name}</div>
              ) : null}
              <label htmlFor="last_name">Tên</label>
              <input
                type="text"
                onChange={formik.handleChange}
                name="last_name"
                id="last_name"
                placeholder="Tên của quý khách"
              />
              {formik.touched.last_name && formik.errors.last_name ? (
                <div className="error">{formik.errors.last_name}</div>
              ) : null}
              <label htmlFor="last_name">Email</label>
              <input
                type="email"
                onChange={formik.handleChange}
                name="email"
                id="email"
                placeholder="Email của quý khách"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
              <label htmlFor="last_name">Số điện thoại</label>
              <input
                type="phone"
                onChange={formik.handleChange}
                name="phone"
                id="phone"
                placeholder="Số điện thoại của quý khách"
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="error">{formik.errors.phone}</div>
              ) : null}
              <ApiForm formik={formik}></ApiForm>
              <label htmlFor="message">Ghi chú</label>
              <textarea
                id="message"
                onChange={formik.handleChange}
                name="message"
                placeholder="Thông tin thêm..."
              />
            </Col>
            <Col>
              <div className="order">
                <table
                  className="table-cart"
                  style={{ width: "100%", borderCollapse: "collapse" }}
                >
                  <thead>
                    <tr>
                      <th style={{ width: "60%" }}>Sản Phẩm</th>
                      <th style={{ width: "20%" }}>Số Lượng</th>
                      <th style={{ width: "20%" }}>Giá</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <h3 className="title">{item.title}</h3>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <p>{item.quantity}</p>
                        </td>
                        <td style={{ textAlign: "end", paddingRight: "20px" }}>
                          <ConvertPrice
                            price={item.price * item.quantity}
                          ></ConvertPrice>
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td colSpan={2}>Tổng Đơn hàng: </td>
                      <td>
                        <ConvertPrice price={totalAmount}></ConvertPrice>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="payment">
                <div className="thumb-payment">
                  <Tab.Container id="left-tabs-example" defaultActiveKey="cod">
                    <Row>
                      <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                          <Nav.Item>
                            <Nav.Link
                              eventKey="cod"
                              name="cod"
                              onClick={(e) => checkMethod(e)}
                            >
                              Ship COD
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link
                              eventKey="banking"
                              name="banking"
                              onClick={(e) => checkMethod(e)}
                            >
                              Chuyển Khoản QR
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link
                              eventKey="zaloPay"
                              name="zaloPay"
                              onClick={(e) => checkMethod(e)}
                            >
                              ZaloPay
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Col>
                      <Col sm={9}>
                        <Tab.Content>
                          <Tab.Pane eventKey="cod">
                            Thanh toán khi nhận hàng
                          </Tab.Pane>
                          <Tab.Pane eventKey="banking">
                            <h4>Thanh toán qua mã QR sau: </h4>
                          </Tab.Pane>
                          <Tab.Pane eventKey="zaloPay">
                            <h4>Thanh toán qua ZaloPay: </h4>
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Row>
                  </Tab.Container>
                </div>
                <button type="submit">Mua hàng</button>
              </div>
            </Col>
          </Row>
        </form>
      </Container>
    </div>
  );
};

export default Order;
