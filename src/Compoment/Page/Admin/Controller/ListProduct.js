import React, { useEffect, useState } from 'react';
import Table from "react-bootstrap/Table";
import Title from '../../../Title/Title';
import { Container, Row, Button, Spinner } from 'react-bootstrap';
import { UseCart } from '../../../../Context/Data/Cart';
import ConvertPrice from '../../../Global/Thumb/ConvertPrice';
import useAxios from '../../../../Context/API/UseAxios';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./FunctionProduct.css";
import usePageTitle from '../../../../Features/TitlePage';

const ListProduct = (props) => {
    usePageTitle(`Danh sách sản phẩm - Ông Xuân`);

    const navigate = useNavigate();
    const { linkProduct } = UseCart();
    const [dataProduct, setDataProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetching data
    const data = useAxios(props.link);  // Call useAxios directly here

    useEffect(() => {
        if (data) {
            setDataProduct(data); // Save data to state when data is fetched
            setLoading(false); // Stop loading once data is fetched
        }
    }, [data]);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${props.link}/${id}`);
            alert("Đã xóa sản phẩm thành công");
            // Re-fetch data after delete
            setDataProduct(prevData => prevData.filter(item => item.ID !== id));
        } catch (error) {
            console.error("Errors Deleting Data:", error);
            setError('Có lỗi xảy ra khi xóa sản phẩm.');
        }
    };

    const handleUpdate = (id) => {
        // console.log(id);
        
        window.location.href = `/update-product/${id}`;
    };

    // Table headers
    const tablelistProduct = [
        "id",
        "Tên sản phẩm",
        "Mã sản phẩm",
        "Giá",
        "Giảm giá",
        "Số lượng",
        "Danh mục",
        "Mô tả",
        "Trạng thái",
    ];

    if (loading) {
        return <div className="text-center"><Spinner animation="border" /> Đang tải dữ liệu...</div>;
    }

    return (
        <div className="admin-list-product">
            <Container>
                <Row>
                    <Title title="Danh sách sản phẩm" />
                </Row>
            </Container>
            {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {tablelistProduct.map((item, index) => (
                            <th key={index}>{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {dataProduct.length === 0 ? (
                        <tr>
                            <td colSpan="9" className="text-center">
                                Không có sản phẩm nào.
                            </td>
                        </tr>
                    ) : (
                        dataProduct.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.title}</td>
                                <td>{item.code}</td>
                                <td>
                                    <ConvertPrice price={item.price} />
                                </td>
                                <td>
                                    <ConvertPrice price={item.sale} />
                                </td>
                                <td>{item.quantity}</td>
                                <td>{item.category}</td>
                                <td>{item.description}</td>
                                <td className="icon-function">
                                    <Button
                                        variant="danger"
                                        onClick={() => handleDelete(item.ID)}
                                    >
                                        <i className="fa-solid fa-trash-can"></i> Xóa
                                    </Button>
                                    <Button
                                        variant="primary"
                                        onClick={() => handleUpdate(item.ID)}
                                    >
                                        <i className="fa-solid fa-pen"></i> Cập nhật
                                    </Button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        </div>
    );
};

export default ListProduct;
