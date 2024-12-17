import React, { useState } from "react";
import { UseCart } from "../../../Context/Data/Cart";
import "./Card.css";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const Card = () => {
  const { cart, handleQuantity, handleDelete } = UseCart();
  const [voucherCode, setVoucherCode] = useState("");
  const [discount, setDiscount] = useState(0); // Trường giảm giá

  // Hàm xử lý voucher
  const handleVoucher = () => {
    // Giả sử bạn kiểm tra mã giảm giá với một API hoặc danh sách mã giảm giá cứng
    if (voucherCode === "DISCOUNT10") {
      setDiscount(10); // Áp dụng giảm giá 10%
    } else {
      setDiscount(0);
      alert("Mã giảm giá không hợp lệ.");
    }
  };

  // Tính tổng giá trị của giỏ hàng sau khi áp dụng mã giảm giá
  const calculateTotal = () => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return total - (total * (discount / 100)); // Áp dụng giảm giá
  };

  // Tính tổng giá trị của giỏ hàng trước giảm giá
  const calculateTotalBeforeDiscount = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <Container className="page-cart">
      <Row>
        <Col lg={12}><h2 className="heading">Trang Giỏ Hàng</h2></Col>
      </Row>
      <Row>
        <Col lg={8}>
          <table
            className="table-cart"
            style={{ width: "100%", borderCollapse: "collapse" }}
          >
            <thead>
              <tr>
                <th style={{ width: "20%" }}>Hình ảnh</th>
                <th style={{ width: "30%" }}>Sản Phẩm</th>
                <th style={{ width: "20%" }}>Số Lượng</th>
                <th style={{ width: "10%" }}>Giá</th>
                <th style={{ width: "10%" }}>Tạm Tính</th>
                <th style={{ width: "10%" }}>Xoá</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img src={item.images} alt={item.title} />
                  </td>
                  <td>
                    <h3 className="title">{item.title}</h3>
                  </td>
                  <td>
                    <span
                      onClick={() => handleQuantity("minus", index)}
                      className="quantity-btn"
                    >
                      <i className="fa fa-minus" aria-hidden="true"></i>
                    </span>
                    <input
                      type="number"
                      name="quantity"
                      value={item.quantity}
                      readOnly
                    />
                    <span
                      onClick={() => handleQuantity("plus", index)}
                      className="quantity-btn"
                    >
                      <i className="fa fa-plus"></i>
                    </span>
                  </td>
                  <td>
                    <p>
                      {isNaN(item.price) || item.price === null 
                        ? "0.00" 
                        : parseFloat(item.price).toFixed(2)} Đ
                    </p>
                  </td>
                  <td>
                    <p>{(item.price * item.quantity).toFixed(2)} Đ</p>
                  </td>
                  <td>
                    <a href="javascript:;" onClick={() => handleDelete(index)}>
                      <i className="fa-solid fa-trash-can"></i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
        <Col lg={4}>
          <div className="s_total">
            <div className="info">
              <div>Tổng Đơn Hàng: </div>
              <div className="total">
                <span>
                  {calculateTotalBeforeDiscount().toFixed(2)} Đ
                </span>
              </div>
            </div>
            <div className="info">
              <div>Giảm Giá: </div>
              <div className="total">
                <span>
                  {discount > 0 ? `${discount}%` : "Không có"}
                </span>
              </div>
            </div>
            <div className="info">
              <div>Tổng Tiền Sau Giảm Giá: </div>
              <div className="total">
                <span>
                  {calculateTotal().toFixed(2)} Đ
                </span>
              </div>
            </div>
            <div className="voucher">
              <h5>Nhập mã giảm giá (nếu có): </h5>
              <input
                type="text"
                value={voucherCode}
                onChange={(e) => setVoucherCode(e.target.value)}
                onBlur={handleVoucher} // Kiểm tra mã giảm giá khi mất focus
                placeholder="Nhập mã giảm giá"
              />
            </div>
            <Link to="/order" className="s_button">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i> MUA NGAY
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Card;
