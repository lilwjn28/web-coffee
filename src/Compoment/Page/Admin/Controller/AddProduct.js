import React, { useState } from 'react';
import { Button, Form, Container, Row, Col, Alert } from "react-bootstrap";
import useAxios from '../../../../Context/API/UseAxios';
import { UseCart } from '../../../../Context/Data/Cart';
import usePageTitle from '../../../../Features/TitlePage';
import Title from '../../../Title/Title';
import axios from 'axios';

const AddCoffeeProduct = () => {
    usePageTitle(`Thêm sản phẩm - Cà phê bột`);

    const [validated, setValidated] = useState(false);
    const { linkCate, linkProduct } = UseCart();
    const cate = useAxios(linkCate);

    const [dataProduct, setDataProduct] = useState({
        title: "",
        code: "",
        price: "",
        sale: "",
        quantity: "",
        images: null, // Thay đổi này để lưu file ảnh
        description: "",
        category: "",
    });

    const fetchData = async (productData) => {
        console.log("Dữ liệu gửi đi:", productData);  // Log dữ liệu đã thay đổi
        try {
            const response = await axios.post("http://localhost:3301/products", productData, {
                headers: {
                    "Content-Type": "multipart/form-data" // Quan trọng để gửi dữ liệu file
                }
            });
            console.log("Phản hồi từ server:", response.data);
            alert("Thêm sản phẩm thành công!");
            window.location.reload();
        } catch (error) {
            console.error("Lỗi khi thêm sản phẩm:", error.response?.data || error.message);
            alert("Thêm sản phẩm thất bại.");
        }
    };

    const handlePostProduct = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            // Chuyển các giá trị giá bán và khuyến mãi sang kiểu số
            const productData = new FormData();  // Sử dụng FormData để gửi file

            productData.append("title", dataProduct.title);
            productData.append("code", dataProduct.code);
            productData.append("price", parseFloat(dataProduct.price));
            productData.append("salePrice", parseFloat(dataProduct.sale));
            productData.append("quantity", parseInt(dataProduct.quantity));
            productData.append("description", dataProduct.description);
            productData.append("category", dataProduct.category);

            // Nếu có file ảnh, thêm vào FormData
            if (dataProduct.images) {
                productData.append("images", dataProduct.images);
            }

            await fetchData(productData);  // Gửi dữ liệu đã được xử lý
        }
        setValidated(true);
    };

    return (
        <div className="form-add-product">
            <Container>
                <Row>
                    <Title title="Thêm sản phẩm cà phê bột mới" />
                </Row>
                <Form noValidate validated={validated} onSubmit={handlePostProduct}>
                    <Form.Group className="mb-3" controlId="formProductName">
                        <Form.Label>Tên sản phẩm</Form.Label>
                        <Form.Control
                            required
                            size="lg"
                            type="text"
                            placeholder="Nhập tên sản phẩm"
                            onChange={(e) =>
                                setDataProduct({ ...dataProduct, title: e.target.value })
                            }
                        />
                        <Form.Control.Feedback type="invalid">
                            Vui lòng nhập tên sản phẩm.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formProductCode">
                        <Form.Label>Mã sản phẩm</Form.Label>
                        <Form.Control
                            required
                            size="lg"
                            type="text"
                            placeholder="Nhập mã sản phẩm"
                            onChange={(e) =>
                                setDataProduct({ ...dataProduct, code: e.target.value })
                            }
                        />
                        <Form.Control.Feedback type="invalid">
                            Vui lòng nhập mã sản phẩm.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Row>
                        <Col md={4}>
                            <Form.Group className="mb-3" controlId="formProductPrice">
                                <Form.Label>Giá bán thường</Form.Label>
                                <Form.Control
                                    required
                                    size="lg"
                                    type="number"
                                    placeholder="Nhập giá bán"
                                    onChange={(e) =>
                                        setDataProduct({ ...dataProduct, price: e.target.value })
                                    }
                                />
                                <Form.Control.Feedback type="invalid">
                                    Vui lòng nhập giá bán sản phẩm.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group className="mb-3" controlId="formSalePrice">
                                <Form.Label>Giá khuyến mãi</Form.Label>
                                <Form.Control
                                    size="lg"
                                    type="number"
                                    placeholder="Nhập giá khuyến mãi"
                                    onChange={(e) =>
                                        setDataProduct({ ...dataProduct, sale: e.target.value })
                                    }
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group className="mb-3" controlId="formQuantity">
                                <Form.Label>Số lượng</Form.Label>
                                <Form.Control
                                    required
                                    size="lg"
                                    type="number"
                                    placeholder="Nhập số lượng"
                                    onChange={(e) =>
                                        setDataProduct({ ...dataProduct, quantity: e.target.value })
                                    }
                                />
                                <Form.Control.Feedback type="invalid">
                                    Vui lòng nhập số lượng sản phẩm.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3" controlId="formProductImages">
                        <Form.Label>Ảnh sản phẩm</Form.Label>
                        <Form.Control
                            required
                            size="lg"
                            type="file"
                            onChange={(e) =>
                                setDataProduct({ ...dataProduct, images: e.target.files[0] })
                            }
                        />
                        <Form.Control.Feedback type="invalid">
                            Vui lòng chọn ảnh sản phẩm.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formCategory">
                        <Form.Label>Danh mục sản phẩm</Form.Label>
                        <Form.Select
                            required
                            onChange={(e) =>
                                setDataProduct({ ...dataProduct, category: e.target.value })
                            }
                        >
                            <option value="">Chọn danh mục</option>
                            <option value="Robusta">Robusta</option>
                            <option value="Arabica">Arabica</option>
                            <option value="Culi">Culi</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            Vui lòng chọn danh mục sản phẩm.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formDescription">
                        <Form.Label>Mô tả sản phẩm</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            placeholder="Nhập mô tả sản phẩm"
                            onChange={(e) =>
                                setDataProduct({ ...dataProduct, description: e.target.value })
                            }
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Thêm sản phẩm
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default AddCoffeeProduct;
