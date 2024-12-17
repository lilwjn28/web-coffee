import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import "./FunctionProduct.css";
import useAxios from "../../../../Context/API/UseAxios";
import { UseCart } from "../../../../Context/Data/Cart";
import axios from "axios";

const UpdateProduct = () => {
  const { slug: keyValue } = useParams();
  console.log(keyValue);
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const { linkCate, linkProduct } = UseCart();
  const cate = useAxios(linkCate);
  const data = useAxios(`http://localhost:3301/products?ID=${keyValue}`);

  const [dataProduct, setDataProduct] = useState({
    title: "",
    code: "",
    price: "",
    sale: "",
    quantity: "",
    images: "",
    category: "",
    description: "",
  });

  useEffect(() => {
    if (data && data) {
      setDataProduct({
        ID: keyValue,
        title: data.title || "",
        code: data.code || "",
        price: data.price || "",
        sale: data.sale || "",
        quantity: data.quantity || "",
        images: data.images || "",
        category: data.category || "",
        description: data.description || "",
      });
    }
  }, [data]);

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }
  
    if (
      !dataProduct.title ||
      !dataProduct.code ||
      !dataProduct.price ||
      !dataProduct.sale ||
      !dataProduct.quantity ||
      !dataProduct.category ||
      !dataProduct.description
    ) {
      alert("Vui lòng nhập đầy đủ thông tin sản phẩm.");
      return;
    }
  
    try {
      const formData = new FormData();
      formData.append("ID", dataProduct.ID);
      formData.append("title", dataProduct.title);
      formData.append("code", dataProduct.code);
      formData.append("price", dataProduct.price);
      formData.append("sale", dataProduct.sale);
      formData.append("qty", dataProduct.quantity);
      formData.append("category", dataProduct.category);
      formData.append("description", dataProduct.description);
  
      // Chỉ gửi ảnh nếu có thay đổi
      if (dataProduct.images && dataProduct.images instanceof File) {
        formData.append("image", dataProduct.images);
      } else if (dataProduct.images && typeof dataProduct.images === 'string') {
        formData.append("image", dataProduct.images); // Nếu người dùng nhập URL, gửi URL
      }
  
      // Gửi PUT request
      await axios.put(`${linkProduct}?ID=${keyValue}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      alert("Cập nhật sản phẩm thành công!");
      window.location.reload();
    } catch (error) {
      console.log("Lỗi khi cập nhật sản phẩm:", error.response || error);
      alert("Có lỗi xảy ra khi cập nhật sản phẩm.");
    }
  };
  
  return (
    <div className="Update-Product">
      <div className="form-add-product">
        <Container>
          <Row>
            {/* <Title title={`Cập nhật sản phẩm : ${dataProduct.title}`}></Title> */}
          </Row>
          <Form noValidate validated={validated} onSubmit={handleUpdateProduct}>
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Tên sản phẩm</Form.Label>
              <Form.Control
                required
                size="lg"
                name="title"
                type="text"
                onChange={(e) =>
                  setDataProduct({ ...dataProduct, title: e.target.value })
                }
                value={dataProduct.title}
                placeholder="Tên sản phẩm"
              />
              <Form.Control.Feedback type="invalid">
                Vui lòng nhập tên sản phẩm
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCode">
              <Form.Label>Mã sản phẩm</Form.Label>
              <Form.Control
                required
                size="lg"
                type="text"
                onChange={(e) =>
                  setDataProduct({ ...dataProduct, code: e.target.value })
                }
                value={dataProduct.code}
                placeholder="Mã sản phẩm"
              />
              <Form.Control.Feedback type="invalid">
                Vui lòng nhập mã sản phẩm
              </Form.Control.Feedback>
            </Form.Group>

            <Row>
              <Form.Group as={Col} className="mb-3" controlId="formBasicPrice">
                <Form.Label>Giá bán</Form.Label>
                <Form.Control
                  required
                  size="lg"
                  type="number"
                  onChange={(e) =>
                    setDataProduct({ ...dataProduct, price: e.target.value })
                  }
                  value={dataProduct.price}
                  placeholder="Giá bán"
                />
                <Form.Control.Feedback type="invalid">
                  Vui lòng nhập giá sản phẩm
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} className="mb-3" controlId="formBasicSale">
                <Form.Label>Giá khuyến mãi</Form.Label>
                <Form.Control
                  size="lg"
                  type="number"
                  onChange={(e) =>
                    setDataProduct({ ...dataProduct, sale: e.target.value })
                  }
                  value={dataProduct.sale}
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicQuantity">
              <Form.Label>Số lượng sản phẩm</Form.Label>
              <Form.Control
                required
                size="lg"
                type="number"
                onChange={(e) =>
                  setDataProduct({ ...dataProduct, quantity: e.target.value })
                }
                value={dataProduct.quantity}
                placeholder="Số lượng"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicImage">
  <Form.Label>Ảnh sản phẩm</Form.Label>
  <Form.Control
    size="lg"
    type="file"
    name="image"
    onChange={(e) => {
      const file = e.target.files[0];  // Lấy file ảnh người dùng chọn
      if (file) {
        // Bạn có thể sử dụng URL.createObjectURL để hiển thị ảnh trong trình duyệt
        const imageUrl = URL.createObjectURL(file);
        setDataProduct({ ...dataProduct, images: imageUrl });  // Cập nhật URL ảnh vào state
      }
    }}
  />
</Form.Group>


            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Mô tả sản phẩm</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={3}
                onChange={(e) =>
                  setDataProduct({
                    ...dataProduct,
                    description: e.target.value,
                  })
                }
                value={dataProduct.description}
              />
              <Form.Control.Feedback type="invalid">
                Vui lòng nhập mô tả sản phẩm
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
              Cập nhật
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default UpdateProduct;
