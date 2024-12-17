import React from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap/";
import logoCoffee from "../../../Asset/Images/logo/logo-agency.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { UseCart } from "../../../Context/Data/Cart";
import { InputGroup, Form } from "react-bootstrap";

const Header = () => {
  const { cart } = UseCart();
  console.log();
  const handleInputSearch = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      window.location.href = `/search/${e.target.value}`;
    }
  };
  return (
    <>
      <Navbar expand="lg" className="flex-column vh-100 p-3 header" style={{}}>
        <Link to="/" className="brands">
          <img
            src={logoCoffee}
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Link>
        <NavLink className="flex-column menu-pc">
          <NavLink className="item-menu" to="/">
            Trang Chủ
          </NavLink>
          <NavLink className="item-menu" to="/about-me">
            Về Chúng Tôi
          </NavLink>
          
          <NavLink className="item-menu" to="/product-category">
            Sản Phẩm
          </NavLink>
          <NavLink className="item-menu" to="/blog">
            Tin tức
          </NavLink>
          <NavLink className="item-menu" to="/contact">
            Liên hệ
          </NavLink>
        </NavLink>
        <div className="flex flex-row user">
          <Link to="/cart">
            <span>
              <i className="fa-solid fa-cart-shopping"></i>
              Giỏ hàng{" "}
              <i id="quantity">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </i>
            </span>
          </Link>
          <Nav.Link to="/">
            <span>
              <i className="fa-solid fa-user"> Admin</i> 
            </span>
          </Nav.Link>
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
        <NavLink className="flex flex-row social">
          <Nav.Link to="/">
            <i className="fa-brands fa-facebook"></i>
          </Nav.Link>
          <Nav.Link to="/">
            <i className="fa-brands fa-square-instagram"></i>
          </Nav.Link>
          <Nav.Link to="/">
            <i className="fa-brands fa-linkedin"></i>
          </Nav.Link>
          <Nav.Link to="/">
            <i className="fa-brands fa-square-youtube"></i>
          </Nav.Link>
        </NavLink>
      </Navbar>
      <div className="bottom-menu">
        {/* Search box */}
        <div className="menu-left">
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

        {/* Logo ở giữa */}
        <div className="menu-center">
          <img src={logoCoffee} alt="Logo" className="logo" />
        </div>

        {/* Icon bên phải */}
        <div className="menu-right">
          <Link className="user" to="/cart">
            <span className="icon-cart">
              <i className="fa-solid fa-cart-shopping"></i>
              Giỏ hàng{" "}
              <i id="quantity">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </i>
            </span>
          </Link>
          <Link to="/">
            <span>
              <i className="fa-solid fa-user"></i> Admin
            </span>
          </Link>
          {/* Nút mở menu */}
          <button className="menu-btn">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
