import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import useAxios from "../../../Context/API/UseAxios";
import "./ProductMarketing.css";
const ProductMarketing = (props) => {
  const { slug: keyValue } = useParams();
  console.log(keyValue);
  const show = useAxios(
    "https://6716463e33bc2bfe40bd35cb.mockapi.io/demoapi-xuanphuc/productMarketing"
  ).filter((item) => item.id === keyValue);

  return (
    <div className="detail-product-marketing">
      {show &&
        show.map((item) => (
          <Container>
            <>
              <Row>
                <Col lg={12}>
                  <div className="heading">
                    <h2>{item.title}</h2>
                    <div className="info flex flex-row">
                      <p>
                        By <span>{item.user}</span>
                      </p>
                      <p>
                        <i class="fa-solid fa-cart-shopping"></i> {item.count}{" "}
                        sales
                      </p>
                      <p id={item.update ? "active" : "normal"}>
                        Recently Updated{" "}
                        {item.update ? (
                          <i class="fa-solid fa-circle-check"></i>
                        ) : (
                          <i class="fa-solid fa-circle-xmark"></i>
                        )}{" "}
                      </p>
                      <p id={item.update ? "active" : "normal"}>
                        Well Documented{" "}
                        {item.update ? (
                          <i class="fa-solid fa-circle-check"></i>
                        ) : (
                          <i class="fa-solid fa-circle-xmark"></i>
                        )}{" "}
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={6}></Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <div className="detail-product-thumb">
                    <img src={item.imagethumb} alt="" />
                    <Link to={item.preview} target="_blank">
                      {" "}
                      Live Preview
                    </Link>
                    {item.screenshot ? (
                      <Link to={item.screenshot} target="_blank">
                        {" "}
                        ScreenShot
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                  {item.imageproduct && item.imageproduct.map((item) => (
                    <img src={item} alt="" />
                  ))}
                </Col>
              </Row>
            </>
          </Container>
        ))}
      ;
    </div>
  );
};

export default ProductMarketing;
