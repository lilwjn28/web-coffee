import React from 'react';
import "./Footer.css"
import {Col, Container, Row} from "react-bootstrap"
import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <>
            <div className="footer space-compoment">
                <Container>
                    <Row>
                        
                        <Col lg={3} md={6} sm={6}>
                            <div className="footer-col2 flex flex-column">
                                <h4>Thông Tin</h4>
                                <ul>
                                    <li>
                                        <Link to="/" className="flex flex-row">
                                        <span>Trang Chủ</span>
                                        <i className="fa-solid fa-arrow-right"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/about-us" className="flex flex-row">
                                        <span>Giới Thiệu</span>
                                        <i className="fa-solid fa-arrow-right"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/product-category" className="flex flex-row">
                                        <span>Sản Phẩm</span>
                                        <i className="fa-solid fa-arrow-right"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={6}>
                        <div className="footer-col3 flex flex-row">
                            <h4>Liên Hệ</h4>
                            <ul>
                            <li>
                                <i className="fa-solid fa-paper-plane"></i>
                                 
                                 <Link to="#">
                                 Đường Số 23, Phường 11, Quận 6, TP Hồ Chí Minh
                                 </Link>
                             </li>    
                             <li>
                                <i className="fa-solid fa-paper-plane"></i>
                                 
                                 <Link to="tel:0387039792">
                                 0387039792
                                 </Link>
                             </li>  
                             <li>
                                <i className="fa-solid fa-paper-plane"></i>
                                 
                                 <Link to="email:Thangvuong843@gmail.com">
                                 Thangvuong843@gmail.com
                                 </Link>
                             </li>      
                            </ul>
                        </div>
                        </Col>
                        <Col lg={3} md={6} sm={6}>
                        <div className="footer-col3 footer-col4 flex flex-row">
                            <h4>Account</h4>
                            <ul>
                                <li>
                                    <Link to="#">
                                    <i className="fa-solid fa-user"></i>Tài Khoản
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                    <i className="fa-solid fa-user"></i>Đơn Hàng
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                    <i className="fa-solid fa-user"></i>Hướng Dẫn Thanh Toán
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                    <i className="fa-solid fa-user"></i>Chính Sách Thanh Toán
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        
                      

                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    );
};

export default Footer;