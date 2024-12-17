import React, { useState } from "react";
import "./HeaderNew.css";
import Button from "react-bootstrap/Button";
import {Container, Row, Col, InputGroup, Form} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, Link } from "react-router-dom";
import { UseCart } from "../../../Context/Data/Cart";
import Offcanvas from "react-bootstrap/Offcanvas";
import useAxios from "../../../Context/API/UseAxios";
import { useNavigate } from "react-router-dom";



const HeaderNew = () => {
  const [emailUser] = useState(localStorage.getItem("email"));
  const navigate = useNavigate();
  const brandName = "Ông Xuân";
  const dataAdmin = useAxios(
   "http://localhost:3301/users"
    
  );
  const check = dataAdmin.find((item) => item.email === emailUser)
 

  const { cart } = UseCart();
  const handleInputSearch = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      window.location.href = `/search/${e.target.value}`;
    }
  };
  return (
    <>
    <div className="header-new">
    {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="menu-form mb-3">
          <Container >
            <Row>
             
             <Col xxl={6} xl={6} lg={5} md={5} sm={5} xs={4}>
             <div className="search" >

              <InputGroup>
                <Form.Control
                  onKeyDown={handleInputSearch}
                  placeholder="Tìm kiếm sản phẩm..."
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </InputGroup.Text>
                </InputGroup>
              </div>
             </Col>
             <Col xxl={4} xl={4} lg={5} md={0}>
                <div className="user">
                  <Row>
                    <Col lg={6} md={6}>
                      { check ? (
                        <div className="menu-item menu-user">
                        <NavLink to="/admin-page">
                          <span>
                            Xin chào, {check.role}
                          </span>
                        </NavLink>
                      </div>
                      ) : (
                      <div className="menu-user">
                        <NavLink to="/login">
                          <span>
                            <i className="fa-solid fa-user"></i> Đăng nhập
                          </span>
                        </NavLink>
                      </div>
                      )}
                      
                    </Col>
                    <Col lg={6} md={6}>
                      <div className="cart-header">
                        <Link to="/cart">
                          <span>
                            <i className="fa-solid fa-cart-shopping"></i> Giỏ
                            hàng{" "}
                            <i id="quantity">
                              {cart.reduce(
                                (sum, item) => sum + item.quantity,
                                0
                              )}
                            </i>
                          </span>
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <Col lg={12}>
            <div className="menu-header menu-pc flex ">
            <NavLink className="item-menu" to="/">
              Trang Chủ
            </NavLink>
            <NavLink className="item-menu" to="/about-us">
              Về Chúng Tôi
            </NavLink>
            <NavLink className="item-menu hover-menu" to="/product-category">
              Sản Phẩm
            </NavLink>
            <NavLink className="item-menu" to="/blog">
              Tin tức
            </NavLink>
            <NavLink className="item-menu" to="/contact">
              Liên Hệ
            </NavLink>
            </div>
            <Col nd={4} sm={4} xs={4}></Col>

            </Col>
            
           <Col md={4} sm={4} cs={4}>
           <Navbar.Toggle 
           aria-controls={`offcanvasNavbar-expand-${expand}`} 
           />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-${expand}`}
                >
                  {brandName} Xin Chào
                </Offcanvas.Title>

              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3 nav-menu-mobile">
                  <div className="menu-mobile flex flex-column">
                    <NavLink className="item-menu" to="/">
                      Trang Chủ
                    </NavLink>
                    <NavLink className="item-menu" to="/about-us">
                      Về Chúng Tôi
                    </NavLink>
                   
                    <NavLink className="item-menu" to="/product-category">
                      Sản Phẩm
                    </NavLink>
                    <NavLink className="item-menu" to="/blog">
                      Tin Tức
                    </NavLink>
                    <NavLink className="item-menu" to="/contact">
                      Liên Hệ
                    </NavLink>
                  </div>
                 
                  {check ? (
                    <div className="menu-item menu-user-mobile">
                      <NavLink to="/admin-page">
                      <span id="admin-log">
                      Xin Chào, <i className="fa-solid fa-user"></i>{" "}
                      {check.role}
                      </span>
                      <NavDropdown
                      title="Admin"
                      id={`offCanvasNavbarDropdown-expand-${expand}`}
                      >
                        <NavDropdown.Item href="/user">
                        Sửa hồ sơ
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/add-product">
                        Thêm sản phẩm
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/list-product">
                        Danh Sách Sản Phẩm
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/logout">
                        Đăng Xuất
                        </NavDropdown.Item>
                      </NavDropdown>
                      </NavLink>
                      {/* <div className="sub-menu services flex flex-column">
                        <Link to="/user">Sửa hồ sơ</Link>
                        <Link to="/add-product">Thêm sản phẩm</Link>
                        <Link to="/list-product">Danh Sách Sản Phẩm</Link>
                        <Link to="/logout">Đăng Xuất</Link>
                      </div> */}
                    </div>
                  ) : (
                    <div className="meu-user-mobile">
                        <NavLink to="/login">
                        <span>
                          <i className="fa-solid fa-user"></i>Đăng Nhập
                        </span>
                        </NavLink>
                    </div>
                  )}
                
                  
                </Nav>
              </Offcanvas.Body>
              </Navbar.Offcanvas>
           </Col>
          </Container>
        </Navbar>
      ))}
    </div>
    
    </>
  );
};

export default HeaderNew;
