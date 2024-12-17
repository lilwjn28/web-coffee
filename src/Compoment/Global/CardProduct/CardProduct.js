import React from "react";
import "./CardProduct.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UseCart } from "../../../Context/Data/Cart";
import ConvertPrice from "../Thumb/ConvertPrice";

const CardProduct = ({ id, images, title, description, price }) => {
  const { handleAddToCart } = UseCart();

  // Đặt ảnh mặc định nếu không có ảnh hợp lệ
  const defaultImage = "path/to/default-image.jpg"; // Đổi đường dẫn đến ảnh mặc định của bạn
  const imageSrc = images && images !== "" ? images : defaultImage;

  return (
    <div className="thumb">
      <Link to={`/product/${id && id}`}>
        <img
          src={imageSrc}
          alt={title}
          // style={{ width: "100%", height: "auto" }} // Đảm bảo ảnh hiển thị đầy đủ
        />
        <h3>{title}</h3>
      </Link>

      <p><ConvertPrice price={price}></ConvertPrice></p>
      <Button variant="primary" onClick={() => handleAddToCart({ id, images, title, description, price })}>Thêm vào giỏ hàng</Button>
    </div>
  );
};

export default CardProduct;
