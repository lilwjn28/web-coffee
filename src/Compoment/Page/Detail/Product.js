import React, { useEffect, useState } from "react";
import "./Product.css";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import { Col, Container, Row } from "react-bootstrap";
import SeoProduct from "../SeoProduct/SeoProduct";
import { UseCart } from "../../../Context/Data/Cart";

const Product = () => {
  const { searchQuery } = useParams();
  const [product, setProduct] = useState(null);
  const { handleAddToCart } = UseCart();
  const navigate = useNavigate(); // Initialize useNavigate
  const [count, setCount] = useState(1);

  const getProduct = async () => {
    try {
      const resProduct = await fetch(
        `http://localhost:3301/products?ID=${Number(searchQuery)}`
      );

      if (!resProduct.ok) {
        if (resProduct.status === 404) {
          throw new Error("Sản phẩm không tìm thấy");
        } else {
          throw new Error("Lỗi khi gọi API");
        }
      }

      const dataProduct = await resProduct.json();
      setProduct(dataProduct);
    } catch (error) {
      console.error("Error fetching product:", error.message);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleQuantity = (type) => {
    if (type === "plus") {
      setCount(count + 1);
    } else {
      if (count > 1) {
        setCount(count - 1);
      }
    }
  };

  const handleOrderNow = () => {
    handleAddToCart(product); // Add the product to the cart
    navigate("/cart"); // Navigate to the cart page
  };

  return (
    <Container>
      <Row className="product-detail-container">
        <Col lg={5} className="product-image-section">
          <div className="product-image-main">
            <img
              src={product?.images || ""}
              alt={product?.title || "Product"}
            />
          </div>
        </Col>
        <Col lg={7} className="product-info-section">
          <h1>{product?.title || "Loading..."}</h1>
          <p className="product-price">{product?.price} $</p>
          <span onClick={() => handleQuantity("minus")}>
            <i className="fa fa-minus" aria-hidden="true"></i>
          </span>
          <input
            id="input-quantity"
            type="number"
            name="quantity"
            value={count}
            readOnly
          />
          <span onClick={() => handleQuantity("plus")}>
            <i className="fa fa-plus" aria-hidden="true"></i>
          </span>
          <h4>Đặc điểm nổi bật</h4>
          <p className="product-features">{product?.description || ""}</p>
          <div className="product-actions">
            <button
              className="order-now-button"
              onClick={handleOrderNow} // Updated onClick to handleOrderNow
            >
              Đặt Hàng
            </button>
            <button
              className="add-to-cart-button"
              onClick={() => handleAddToCart(product)}
            >
              Thêm Vào Giỏ Hàng
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
