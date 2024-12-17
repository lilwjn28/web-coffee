import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useAxios from '../../../Context/API/UseAxios';
import ConvertPrice from './ConvertPrice';
const TableList = (props) => {
    const tablelistProduct = [
        "Đơn Hàng",
        "Thời Gian",
        "Sản Phẩm",
        "Tổng Tiền",
        "Khách Hàng",
        "Nội Dung Chuyển Khoản",
        "Nhân Viên",
        props.other,
    ];
    const data = useAxios(props.link);
    return (
       <Container>
        <Row>
            <thead>
                <tr>
                    {tablelistProduct &&
                    tablelistProduct.map((item) => <th>{item}</th>)}
                </tr>
            </thead>
            <tbody>
                {data &&
                data.map((item, index) => (
                <tr>
                    <td>{index +1}</td>
                    <td>{item.title}</td>
                    <td>{item.code} </td>
                    <td>{item.qty} </td>

                    <td>
                        <ConvertPrice price={item.price} />
                    </td>
                    <td>{item.category} </td>
                    <td className="icon-function"></td>
                </tr>
                ))}
            </tbody>
        </Row>
       </Container>
    );
};

export default TableList;